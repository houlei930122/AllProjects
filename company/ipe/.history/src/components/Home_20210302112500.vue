<template>
  <div class="wrap">
    <div class="header clearfix">
      <div class="header1">
        <img class="logo" src="../../public/images/logo.png" />
        <img class="tit" src="../../public/images/tit.png" />
        <div class="form-wrap clearfix">
          <div class="input-wrap">
            <input
              type="text"
              id="word"
              @blur="changeBlur"
              v-model="keyWord"
              placeholder="行业、公司简称、股票代码 "
            />
          </div>
          <div class="submit" @click="searchFn(keyWord)"></div>
        </div>
        <!-- 没有数据是返回 -->
        <div class="redata" v-if="dataState.noData" @click="goData"></div>
      </div>
      <div class="tmt-list-wrap">
        <div class="tmt-list-con">
          <div
            class="tmt-btn"
            :class="hideall ? 'act' : ''"
            @click="chooseSort(0, true)"
          ></div>
          <div class="tmt-list-center">
            <div
              class="tmt-item"
              v-for="(item, index) in allsort"
              :key="item"
              @click="chooseSort(index, false)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 排行榜有内容的情况 -->
      <div class="list-wrap" v-if="!dataState.noData">
        <div class="list-bar">
          <div class="ranking">排行</div>
          <div class="company">公司简称</div>
          <div class="code">股票代码</div>
          <div class="grade">环境绩效</div>
          <div class="hangye">所属行业</div>
        </div>
        <PullUp
          :ref="setRef"
          :LoadMore="LoadMore"
          @loadMore="onScrollBottom"
          class="home scrollable"
        >
          <div class="list-content">
            <div
              class="item"
              v-for="item in initData.useData"
              :key="item[0]"
              @click="goDetails(item[0])"
            >
              <div :class="item[12] > 0 ? 'up' : ''" class="ranking">
                {{ item[10] }}
              </div>
              <div class="company">{{ item[1] }}</div>
              <div class="code">{{ item[0] }}</div>
              <div class="grade">{{ Number(item[5]).toFixed(2) }}</div>
              <div class="hangye">{{ item[4] }}</div>
            </div>
          </div>
        </PullUp>
      </div>
      <!-- 排行榜无内容 -->
      <div class="no-content" v-if="dataState.noData">
        <div class="nocenter">
          <div class="search-icon">
            <img src="../../public/images/search-icon.png" alt="" />
          </div>
          <div class="noword">
            未检索到相关数据，该企业可能未纳入榜单评价，请重新输入检索条件或点击延伸搜索查看更多。
          </div>
          <div class="gomore" @click="goMore"></div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="btn-wrap" v-if="!dataState.noData">
        <div class="intro" @click="showCompany"></div>
        <div class="special" @click="goUccn"></div>
      </div>
    </div>
    <!-- 全部行业 -->
    <transition name="fade">
      <div class="all-wrap" v-if="hideall.show">
        <div class="all-left">
          <div
            class="tmt-p"
            v-for="(item, index) in allsort"
            :key="item"
            :class="index == sortState.index ? 'act' : ''"
            @click="chooseSort(index, false)"
          >
            <span>{{ item.letter }}</span>
            <div class="tet-p-n">{{ item.name }}</div>
          </div>
        </div>
        <div class="all-right">
          <div
            class="tmt-c"
            v-for="item in allsort[sortState.index]['list']"
            :key="item"
            @click="searchFn(item)"
          >
            <div class="tmt-c-n">{{ item }}</div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 公司介绍 -->
    <transition name="fade">
      <div class="company-wrap" v-if="company">
        <div class="company-container">
          <div class="company-con">
            <div class="company-cen">
              <p class="stro">
                自2021年起，澎湃新闻与公众环境研究中心（IPE）联合发布中国上市公司环境绩效动态榜单，旨在通过环境大数据研判，协助各界识别上市公司环境风险，发现绿色投资机会，推动企业践行环境责任，完善环境治理，以市场力量促进绿色转型和低碳发展。
              </p>
              <p class="stro">
                “澎湃新闻”是一个以原创新闻为主的全媒体新闻资讯平台，拥有互联网新闻信息服务一类资质，7*24小时为中国互联网用户生产、聚合优质时政、思想、财经、文化类内容。澎湃新闻目标打造成为互联网新型主流媒体+全媒体矩阵营销平台+全链条内容生态服务商。
              </p>
              <p class="stro">
                公众环境研究中心（Institute of Public and Environmental
                Affairs，IPE）是一家在北京注册的公益环境研究机构。自2006年6月成立以来，IPE致力于收集、整理和分析政府和企业公开的环境信息，搭建环境信息数据库和蔚蓝地图网站、蔚蓝地图APP两个应用平台，整合环境数据服务于绿色采购、绿色金融和政府环境决策，通过企业、政府、公益组织、研究机构等多方合力，撬动大批企业实现环保转型，促进环境信息公开和环境治理机制的完善。
              </p>
              <p class="note-tit">注释:</p>
              <p class="note">
                ①中国上市公司环境绩效榜单为实时动态榜单，评价对象为，自身或其关联企业为2020年度重点排污单位的1868家A股上市公司。评价的数据包括上市公司自身及关联重点排污单位的环境监管记录，企业相关环境信息披露，以及评价之日起回溯两年内出现过处罚金额超过10万的其它非重排关联企业的上述两个维度信息。
              </p>
              <p class="note">
                ②为增加榜单的科学性，除对所有上述上市公司进行大排名形成总榜单，还根据中国证监会发布的上市公司行业清单，对各行业分类评价，形成分榜单。其评价方法与总榜单一致，绩效分值基于纳入计算的企业动态环境信用分值及其持股比例加权平均而得。根据企业环境绩效从低到高进行排序。绩效分值相同时，排名顺序根据蔚蓝地图和合作机构开发的动态环境风险指数由高到低排列。
              </p>
              <p class="note">
                ③重点排污单位是指纳入重点排污单位名录的企业事业单位。由设区的市级人民政府生态环境主管部门依据本行政区域的环境承载力、环境质量改善要求和《重点排污单位名录管理规定（试行）》规定的筛选条件，每年会商有关部门筛选污染物排放量较大、排放有毒有害污染物等具有较大环境风险的企业事业单位，确定重点排污单位名录。
              </p>
              <p class="note">
                如对榜单排行有疑问，详情咨询：liuji@thepaper.cn &ensp;gsc@ipe.org.cn
              </p>
            </div>
          </div>
          <div class="company-close" @click="hideCompany"></div>
        </div>
      </div>
    </transition>
    <!-- 排名提示 -->
    <div class="hint-wrap" v-if="!hintexplain" @click="hideExplain">
      <div class="hint-header"></div>
      <div class="hint-con"></div>
      <div class="hint-wrod">榜单企业，按环境绩效得分，从低到高排序</div>
      <div class="hint-footer"></div>
    </div>
  </div>
</template>

<script>
// import { sort } from "../assets/sort.js";
import PullUp from "./PullUp.vue";
import {
  getCurrentInstance,
  reactive,
  computed,
  onMounted,
  onBeforeMount,
  onUnmounted,
  inject,
  ref,
  nextTick,
  toRefs,
  watch,
} from "vue";
// import axios from 'axios'
export default {
  // beforeCreate () {
  //   console.log(axios)
  // },
  inject:['$axios'],
  created() {
    // this.$axios
    //     .get("https://adpaiprojects.thepaper.cn/2021/02/gongyipai/ipe/rank.json")
    //     .then((res) => {
    //       console.log(res)
    //       this.metaData = res.L
    //     });
  },
  data() {
    return {
      company: false,
      hintexplain: localStorage.getItem('hintexplain'),
      allsort: [],
      // hideall: false,//全部行业
      // sortIndex: 0,
      // allData:[],
      // useData:[],
      metaData: [], //原始数据
      keyWord: "",
    };
  },
  beforeCreate() {
    //获取分类
    this.$axios.get('https://adpaiprojects.thepaper.cn/2021/02/gongyipai/ipe/professions.json')
        .then(res=>{
          console.log(res)
          let sortArr = res.L;
          for (let index = 0; index < sortArr.length; index++) {
            let obj = {}
            let nameStr = sortArr[index]['ML']
            let name = nameStr.split('(')[0]
            let letter = nameStr.split('(')[1].split(')')[0]
            obj.letter = letter
            obj.name = name
            obj.list = sortArr[index]['HY']
            this.allsort.push(obj)
          }
        })
  },

  setup(props, context) {
    let page = 1; //当前展示页数
    const pageNum = 20; //列表个数
    let hideall = reactive({ show: false });
    let sortState = reactive({ index: 0 });
    let dataState = reactive({ noData: false });
    const { ctx } = getCurrentInstance();
    const $axios = inject("$axios");
    let initData = reactive({});
    // onBeforeMount(() => {

    $axios
      .get("https://adpaiprojects.thepaper.cn/2021/02/gongyipai/ipe/rank.json")
      .then((res) => {
        console.log(res);
        const data = res.L;
        initData.allData = data;
        initData.nowData = data;
        initData.useData = data.slice(0, pageNum);
      });

    // });
    //分页加载数据处理
    // initData.useData = []

    let LoadMore = reactive({});
    LoadMore.finish = false;
    LoadMore.loading = false;

    function onScrollBottom() {
      initData.useData = initData.useData.concat(
        initData.nowData.slice(page * pageNum, (page + 1) * pageNum)
      );
      page++;
      // 如果没有更多数据，则加载完成
      if (initData.useData.length >= initData.nowData.length) {
        LoadMore.finish = true;
        return;
      }
      LoadMore.loading = false;
    }
    let myRef = "";
    const setRef = (el) => {
      myRef = el;
    };

    //结果查询
    function searchFn(word) {
      if (!word) return;
      if (hideall.show) {
        hideall.show = false;
      }

      initData.nowData = initData.allData.filter((item) => {
        if (item[0] == word || item[1] == word || item[4] == word) {
          return item;
        }
      });
      // console.log(initData.nowData)
      if (initData.nowData.length === 0) {
        //没有搜索到
        dataState.noData = true;
      } else {
        if (!dataState.noData) {
          myRef.container.scrollTop = 0;
        }
      

        page = 0;
        initData.useData = [].concat(
          initData.nowData.slice(page * pageNum, (page + 1) * pageNum)
        );
        page++;
          dataState.noData = false;
        LoadMore.finish = false;
        LoadMore.loading = false;
      }
    }

    //查看行业
    function chooseSort(index, sw) {
      var isHide = hideall.show;
      sortState.index = index;
      if (sw) {
        hideall.show = !hideall.show;
      } else {
        if (!isHide) {
          hideall.show = true;
        }
      }
    }
    // 返回有数据的时候
    function goData() {
      dataState.noData = false;
    }
    return {
      initData,
      searchFn,
      hideall,
      onScrollBottom,
      LoadMore,
      chooseSort,
      sortState,
      dataState,
      goData,
      setRef,
    };
  },

  methods: {
    hideExplain() {
      this.hintexplain = true;
      localStorage.setItem('hintexplain',true)
    },
    showCompany() {
      this.company = true;
    },
    hideCompany() {
      this.company = false;
    },
    goUccn() {
      //去官网
      window.location.href =
        "http://www.ipe.org.cn/GreenSecurities/Securities.html";
    },
    goDetails(name) {
      //详情
      window.location.href =
        "http://www.ipe.org.cn/GreenSecurities/SecuritiesScreen.html?name=" +
        name;
    },
    goMore() {
      //延伸搜索
      window.location.href =
        "http://www.ipe.org.cn/GreenSecurities/Securities.html";
    },
    changeBlur(){
      let ua = navigator.userAgent;
      let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端
      let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端		
      if(isIOS){
        setTimeout(() => {
          const scrollHeight  =  document.documentElement.scrollTop ||  document.body.scrollTop || 0
          window.scrollTo(0,  Math.max(scrollHeight - 1,  0))
          }, 200)
      }
    }
  },
  components: {
    PullUp,
  },
};
</script>

<style scoped>
@import "../assets/home.css";
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>