#!/bin/bash
ssh root@47.114.169.148 > /dev/null 2>&1 << eeooff
# 构建后端
cd /root/source/docker_ci
docker-compose

eeooff
echo done!


ssh root@47.114.169.148 "df -h"