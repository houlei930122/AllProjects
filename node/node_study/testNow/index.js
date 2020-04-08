/*
 * @Author: your name
 * @Date: 2020-03-11 16:20:21
 * @LastEditTime: 2020-03-11 18:10:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_study\testNow\index.js
 */

const path = require('path');
const fs = require('fs')
module.exports = class TestNow {

    genJestSource(sourcePath = path.resolve('./')) {
        const testPath = `${sourcePath}/_test_`
        if (!fs.existsSync(testPath)) {
            fs.mkdirSync(testPath)
        }
        //遍历代码文件
        let list = fs.readdirSync(sourcePath)
        list
            //添加完整路径
            .map(v => `${sourcePath}/${v}`)
            .filter(v => fs.statSync(v).isFile())
            //排除测试代码
            .filter(v => v.indexOf('.spec') == -1)
            .map(v => this.getTestFile(v))
    }
    getTestFile(filename){
        console.log('filename',filename)
        const testFileName = this.getTestFileName(filename)

        //判断此文件是否存在
        if(fs.existsSync(testFileName)){
            console.log('该测试代码已存在',testFileName)
            return
        }
        const mod = require(filename)
        let source
        if(typeof mod === 'object'){
            source = Object.keys(mod)
                .map(v => this.getTestSource(v, path.basename(filename),true))
                .join('\n')

        }else if(typeof mod === 'function'){
            const baseName = path.basename(filename)
            source = this.getTestSource(baseName.replace('.js', ''), baseName)
        }
        fs.writeFileSync(testFileName,source)

    }
    /**
     * @description: 生成测试代码
     * @param {type} 
     * @return: 
     */
    getTestSource(methodName, classFile, isClass = false) {
        console.log('get', methodName)
        return `test('${'TEST ' + methodName}',() =>{
            const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile}')
            const ret = ${methodName}()
            //expect(ret)
            // .toBe('test return')
        })`
    }

    /**
     * @description: 生成测试文件
     * @param {type} 
     * @return: 
     */
    getTestFileName(filename) {
        const dirName = path.dirname(filename);
        const baseName = path.basename(filename);
        const extName = path.extname(filename)
        const testName = baseName.replace(extName, `.spec${extName}`)

        return path.format({
            root: dirName + '/_test_/',
            base: testName
        })
    }

}