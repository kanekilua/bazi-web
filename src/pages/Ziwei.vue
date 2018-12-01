<template>
    <div class="wrap">
        <v-title-header>紫微斗数</v-title-header>
        <div class="ziwei-box">
            <flexbox :gutter="0">
                <flexbox-item>
                    <div class="table-cell" @click="drawTriangle(1)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[5][0]" v-html="this.redTag[5][0]"></div>
                            <div class="red-tag" v-if="this.redTag[5][1]" v-html="this.redTag[5][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[5][0]" v-html="this.orangeTag[5][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[5][1]" v-html="this.orangeTag[5][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[5][2]" v-html="this.orangeTag[5][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[5][0]">{{grayTag[5][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[5][1]">{{grayTag[5][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[5][2]">{{grayTag[5][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[5][3]">{{grayTag[5][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[5][4]">{{grayTag[5][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[5][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[5][0]">{{this.circleTag[5][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[5][1]">{{this.circleTag[5][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[5][0]}}</div>
                                <div>{{this.doctorTag[5][1]}}</div>
                                <div>{{this.doctorTag[5][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[5][0]]">{{this.officerTag[5][0]}}</div>
                                <div v-if="[this.officerTag[5][1]]">{{this.officerTag[5][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[5][0]">
                            <span v-if="this.qianxiTag[5][0]">{{this.qianxiTag[5][0]}}</span>
                            <span v-if="this.qianxiTag[5][1]">{{this.qianxiTag[5][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[5][0]}}</div>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="table-cell" @click="drawTriangle(2)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[6][0]" v-html="this.redTag[6][0]"></div>
                            <div class="red-tag" v-if="this.redTag[6][1]" v-html="this.redTag[6][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[6][0]" v-html="this.orangeTag[6][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[6][1]" v-html="this.orangeTag[6][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[6][2]" v-html="this.orangeTag[6][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[6][0]">{{grayTag[6][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[6][1]">{{grayTag[6][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[6][2]">{{grayTag[6][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[6][3]">{{grayTag[6][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[6][4]">{{grayTag[6][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[6][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[6][0]">{{this.circleTag[6][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[6][1]">{{this.circleTag[6][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[6][0]}}</div>
                                <div>{{this.doctorTag[6][1]}}</div>
                                <div>{{this.doctorTag[6][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[6][0]]">{{this.officerTag[6][0]}}</div>
                                <div v-if="[this.officerTag[6][1]]">{{this.officerTag[6][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[6][0]">
                            <span v-if="this.qianxiTag[6][0]">{{this.qianxiTag[6][0]}}</span>
                            <span v-if="this.qianxiTag[6][1]">{{this.qianxiTag[6][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[6][0]}}</div>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="table-cell"  @click="drawTriangle(3)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[7][0]" v-html="this.redTag[7][0]"></div>
                            <div class="red-tag" v-if="this.redTag[7][1]" v-html="this.redTag[7][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[7][0]" v-html="this.orangeTag[7][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[7][1]" v-html="this.orangeTag[7][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[7][2]" v-html="this.orangeTag[7][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[7][0]">{{grayTag[7][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[7][1]">{{grayTag[7][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[7][2]">{{grayTag[7][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[7][3]">{{grayTag[7][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[7][4]">{{grayTag[7][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[7][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[7][0]">{{this.circleTag[7][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[7][1]">{{this.circleTag[7][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[7][0]}}</div>
                                <div>{{this.doctorTag[7][1]}}</div>
                                <div>{{this.doctorTag[7][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[7][0]]">{{this.officerTag[7][0]}}</div>
                                <div v-if="[this.officerTag[7][1]]">{{this.officerTag[7][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[7][0]">
                            <span v-if="this.qianxiTag[7][0]">{{this.qianxiTag[7][0]}}</span>
                            <span v-if="this.qianxiTag[7][1]">{{this.qianxiTag[7][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[7][0]}}</div>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="table-cell" @click="drawTriangle(4)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[8][0]" v-html="this.redTag[8][0]"></div>
                            <div class="red-tag" v-if="this.redTag[8][1]" v-html="this.redTag[8][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[8][0]" v-html="this.orangeTag[8][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[8][1]" v-html="this.orangeTag[8][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[8][2]" v-html="this.orangeTag[8][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[8][0]">{{grayTag[8][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[8][1]">{{grayTag[8][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[8][2]">{{grayTag[8][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[8][3]">{{grayTag[8][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[8][4]">{{grayTag[8][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[8][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[8][0]">{{this.circleTag[8][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[8][1]">{{this.circleTag[8][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[8][0]}}</div>
                                <div>{{this.doctorTag[8][1]}}</div>
                                <div>{{this.doctorTag[8][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[8][0]]">{{this.officerTag[8][0]}}</div>
                                <div v-if="[this.officerTag[8][1]]">{{this.officerTag[8][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[8][0]">
                            <span v-if="this.qianxiTag[8][0]">{{this.qianxiTag[8][0]}}</span>
                            <span v-if="this.qianxiTag[8][1]">{{this.qianxiTag[8][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[8][0]}}</div>
                    </div>
                </flexbox-item>
            </flexbox>
            <flexbox :gutter="0">
                <div style="width:25%">                   
                   <div class="table-cell" @click="drawTriangle(12)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[4][0]" v-html="this.redTag[4][0]"></div>
                            <div class="red-tag" v-if="this.redTag[4][1]" v-html="this.redTag[4][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[4][0]" v-html="this.orangeTag[4][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[4][1]" v-html="this.orangeTag[4][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[4][2]" v-html="this.orangeTag[4][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[4][0]">{{grayTag[4][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[4][1]">{{grayTag[4][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[4][2]">{{grayTag[4][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[4][3]">{{grayTag[4][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[4][4]">{{grayTag[4][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[4][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[4][0]">{{this.circleTag[4][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[4][1]">{{this.circleTag[4][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[4][0]}}</div>
                                <div>{{this.doctorTag[4][1]}}</div>
                                <div>{{this.doctorTag[4][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[4][0]]">{{this.officerTag[4][0]}}</div>
                                <div v-if="[this.officerTag[4][1]]">{{this.officerTag[4][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[4][0]">
                            <span v-if="this.qianxiTag[4][0]">{{this.qianxiTag[4][0]}}</span>
                            <span v-if="this.qianxiTag[4][1]">{{this.qianxiTag[4][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[4][0]}}</div>
                    </div>
                    <div class="table-cell" @click="drawTriangle(11)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[3][0]" v-html="this.redTag[3][0]"></div>
                            <div class="red-tag" v-if="this.redTag[3][1]" v-html="this.redTag[3][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[3][0]" v-html="this.orangeTag[3][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[3][1]" v-html="this.orangeTag[3][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[3][2]" v-html="this.orangeTag[3][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[3][0]">{{grayTag[3][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[3][1]">{{grayTag[3][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[3][2]">{{grayTag[3][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[3][3]">{{grayTag[3][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[3][4]">{{grayTag[3][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[3][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[3][0]">{{this.circleTag[3][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[3][1]">{{this.circleTag[3][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[3][0]}}</div>
                                <div>{{this.doctorTag[3][1]}}</div>
                                <div>{{this.doctorTag[3][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[3][0]]">{{this.officerTag[3][0]}}</div>
                                <div v-if="[this.officerTag[3][1]]">{{this.officerTag[3][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[3][0]">
                            <span v-if="this.qianxiTag[3][0]">{{this.qianxiTag[3][0]}}</span>
                            <span v-if="this.qianxiTag[3][1]">{{this.qianxiTag[3][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[3][0]}}</div>
                    </div>
                </div>
                <div class="double-table-cell table-cell canvas-father">
                    <div>
                        <div class="middle-item"><span class="item-key">姓名:</span>{{this.info.name}}</div>
                        <div class="middle-item"><span class="item-key">年龄:</span>19</div>
                        <div class="middle-item"><span class="item-key">公历:</span>{{this.resStr.data.yangdate}}</div>
                        <div class="middle-item"><span class="item-key">农历:</span>{{this.resStr.data.NongLi}}</div>
                        <div class="center-item"><span class="item-key">盘类:</span><span>天盘</span></div>
                        <div class="center-item"><span class="item-key">命主:</span>{{this.resStr.data.mingzhum}}</div>
                        <div class="center-item"><span class="item-key">子年斗君:</span>{{this.resStr.data.dz_a1}}</div>
                    </div>
                    <canvas id="canvas" ref="canvas"></canvas>                 
                </div>
                <div style="width:25%">                   
                    <div class="table-cell"  @click="drawTriangle(5)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[9][0]" v-html="this.redTag[9][0]"></div>
                            <div class="red-tag" v-if="this.redTag[9][1]" v-html="this.redTag[9][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[9][0]" v-html="this.orangeTag[9][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[9][1]" v-html="this.orangeTag[9][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[9][2]" v-html="this.orangeTag[9][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[9][0]">{{grayTag[9][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[9][1]">{{grayTag[9][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[9][2]">{{grayTag[9][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[9][3]">{{grayTag[9][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[9][4]">{{grayTag[9][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[9][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[9][0]">{{this.circleTag[9][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[9][1]">{{this.circleTag[9][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[9][0]}}</div>
                                <div>{{this.doctorTag[9][1]}}</div>
                                <div>{{this.doctorTag[9][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[9][0]]">{{this.officerTag[9][0]}}</div>
                                <div v-if="[this.officerTag[9][1]]">{{this.officerTag[9][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[9][0]">
                            <span v-if="this.qianxiTag[9][0]">{{this.qianxiTag[9][0]}}</span>
                            <span v-if="this.qianxiTag[9][1]">{{this.qianxiTag[9][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[9][0]}}</div>
                    </div>
                     <div class="table-cell" @click="drawTriangle(6)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[10][0]" v-html="this.redTag[10][0]"></div>
                            <div class="red-tag" v-if="this.redTag[10][1]" v-html="this.redTag[10][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[10][0]" v-html="this.orangeTag[10][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[10][1]" v-html="this.orangeTag[10][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[10][2]" v-html="this.orangeTag[10][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[10][0]">{{grayTag[10][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[10][1]">{{grayTag[10][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[10][2]">{{grayTag[10][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[10][3]">{{grayTag[10][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[10][4]">{{grayTag[10][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[10][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[10][0]">{{this.circleTag[10][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[10][1]">{{this.circleTag[10][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[10][0]}}</div>
                                <div>{{this.doctorTag[10][1]}}</div>
                                <div>{{this.doctorTag[10][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[10][0]]">{{this.officerTag[10][0]}}</div>
                                <div v-if="[this.officerTag[10][1]]">{{this.officerTag[10][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[10][0]">
                            <span v-if="this.qianxiTag[10][0]">{{this.qianxiTag[10][0]}}</span>
                            <span v-if="this.qianxiTag[10][1]">{{this.qianxiTag[10][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[10][0]}}</div>
                    </div>
                </div>
            </flexbox>
            <flexbox :gutter="0">
                 <flexbox-item>
                     <div class="table-cell" @click="drawTriangle(10)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[2][0]" v-html="this.redTag[2][0]"></div>
                            <div class="red-tag" v-if="this.redTag[2][1]" v-html="this.redTag[2][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[2][0]" v-html="this.orangeTag[2][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[2][1]" v-html="this.orangeTag[2][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[2][2]" v-html="this.orangeTag[2][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[2][0]">{{grayTag[2][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[2][1]">{{grayTag[2][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[2][2]">{{grayTag[2][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[2][3]">{{grayTag[2][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[2][4]">{{grayTag[2][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[2][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[2][0]">{{this.circleTag[2][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[2][1]">{{this.circleTag[2][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[2][0]}}</div>
                                <div>{{this.doctorTag[2][1]}}</div>
                                <div>{{this.doctorTag[2][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[2][0]]">{{this.officerTag[2][0]}}</div>
                                <div v-if="[this.officerTag[2][1]]">{{this.officerTag[2][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[2][0]">
                            <span v-if="this.qianxiTag[2][0]">{{this.qianxiTag[2][0]}}</span>
                            <span v-if="this.qianxiTag[2][1]">{{this.qianxiTag[2][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[2][0]}}</div>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                     <div class="table-cell" :data-id="2" @click="drawTriangle(9)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[1][0]" v-html="this.redTag[1][0]"></div>
                            <div class="red-tag" v-if="this.redTag[1][1]" v-html="this.redTag[1][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[1][0]" v-html="this.orangeTag[1][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[1][1]" v-html="this.orangeTag[1][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[1][2]" v-html="this.orangeTag[1][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[1][0]">{{grayTag[1][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[1][1]">{{grayTag[1][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[1][2]">{{grayTag[1][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[1][3]">{{grayTag[1][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[1][4]">{{grayTag[1][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[1][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[1][0]">{{this.circleTag[1][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[1][1]">{{this.circleTag[1][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[1][0]}}</div>
                                <div>{{this.doctorTag[1][1]}}</div>
                                <div>{{this.doctorTag[1][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[1][0]]">{{this.officerTag[1][0]}}</div>
                                <div v-if="[this.officerTag[1][1]]">{{this.officerTag[1][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[1][0]">
                            <span v-if="this.qianxiTag[1][0]">{{this.qianxiTag[1][0]}}</span>
                            <span v-if="this.qianxiTag[1][1]">{{this.qianxiTag[1][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[1][0]}}</div>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                     <div class="table-cell"  @click="drawTriangle(8)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[0][0]" v-html="this.redTag[0][0]"></div>
                            <div class="red-tag" v-if="this.redTag[0][1]" v-html="this.redTag[0][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[0][0]" v-html="this.orangeTag[0][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[0][1]" v-html="this.orangeTag[0][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[0][2]" v-html="this.orangeTag[0][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[0][0]">{{grayTag[0][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[0][1]">{{grayTag[0][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[0][2]">{{grayTag[0][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[0][3]">{{grayTag[0][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[0][4]">{{grayTag[0][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[0][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[0][0]">{{this.circleTag[0][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[0][1]">{{this.circleTag[0][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[0][0]}}</div>
                                <div>{{this.doctorTag[0][1]}}</div>
                                <div>{{this.doctorTag[0][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[0][0]]">{{this.officerTag[0][0]}}</div>
                                <div v-if="[this.officerTag[0][1]]">{{this.officerTag[0][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[0][0]">
                            <span v-if="this.qianxiTag[0][0]">{{this.qianxiTag[0][0]}}</span>
                            <span v-if="this.qianxiTag[0][1]">{{this.qianxiTag[0][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[0][0]}}</div>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                     <div class="table-cell"  @click="drawTriangle(7)">
                        <div class="tag-list">
                            <div class="red-tag" v-if="this.redTag[11][0]" v-html="this.redTag[11][0]"></div>
                            <div class="red-tag" v-if="this.redTag[11][1]" v-html="this.redTag[11][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[11][0]" v-html="this.orangeTag[11][0]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[11][1]" v-html="this.orangeTag[11][1]"></div>
                            <div class="orange-tag" v-if="this.orangeTag[11][2]" v-html="this.orangeTag[11][2]"></div>
                            <div class="gray-tag" v-if="this.grayTag[11][0]">{{grayTag[11][0]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[11][1]">{{grayTag[11][1]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[11][2]">{{grayTag[11][2]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[11][3]">{{grayTag[11][3]}}</div>
                            <div class="gray-tag" v-if="this.grayTag[11][4]">{{grayTag[11][4]}}</div>
                        </div>
                        <div class="row">
                            <div class="num-range" v-html="this.numTag[11][0]"></div>
                            <div class="txt-circle" v-if="this.circleTag[11][0]">{{this.circleTag[11][0]}}</div>
                            <div class="txt-circle" v-if="this.circleTag[11][1]">{{this.circleTag[11][1]}}</div>
                        </div>
                        <div class="row ">
                            <div class="doctor">
                                <div>{{this.doctorTag[11][0]}}</div>
                                <div>{{this.doctorTag[11][1]}}</div>
                                <div>{{this.doctorTag[11][2]}}</div>
                            </div>
                            <div class="officer">
                                <div v-if="[this.officerTag[11][0]]">{{this.officerTag[11][0]}}</div>
                                <div v-if="[this.officerTag[11][1]]">{{this.officerTag[11][1]}}</div>
                            </div>
                        </div>
                        <div class="qianxi" v-if="this.qianxiTag[11][0]">
                            <span v-if="this.qianxiTag[11][0]">{{this.qianxiTag[11][0]}}</span>
                            <span v-if="this.qianxiTag[11][1]">{{this.qianxiTag[11][1]}}</span>
                        </div>
                        <div class="shichen">{{this.shichenTag[11][0]}}</div>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            resStr: [],
            info: [],
            redTag: [],
            orangeTag: [],
            grayTag: [], 
            blackTag: [],
            circleTag: [],
            numTag: [],
            doctorTag: [],
            officerTag:[], 
            qianxiTag: [], 
            shichenTag: [], 
            
            centerItem: false,
        }
    },
    created () {
        this.getData()
    },
    updated () {
        // this.drawTriangle();
    },
    methods: {
        getData: function () {
            let userData = {
                'cid' : 53,
                'name' : '张三',
                'sex' : '0',
                'DateType' : 1,
                'year' : 1980,
                'month' : 1,
                'date' : 4,
                'hour' : 5,
                'minute' : 6,
                'other' : 1,
                'runfen' : 1,
            } 
            this.$http.post('/suan/apidata',userData,'cesuan',null,this.success,this.failure) 
        },        
        success: function (res) {
            this.resStr = res;
            let resPan = res.data.pan;
            this.info = res.info;
            // console.log(resPan)
            let redReg = /紫微|天府|天机|天梁|廉贞|贪狼|太阳|太阴|巨门|天同|破军|天相|武曲|七杀/g;
            let orangeReg = /左辅|右弼|文昌|文曲|天魁|天钺|禄存|擎羊|火星|铃星|地空|地劫|陀罗|天马/g;
            let grayReg = /恩光|空亡|天刑|天月|红鸾|天喜|蜚廉|天厨|阴煞|孤辰|寡宿|天哭|天空|三台|八座|天贵|天官|龙池|凤阁|天才|天姚|破碎|封诰|天虚|天寿|天福|大耗|解神|月德|天巫|咸池|劫煞|台辅|华盖|天使|龙德/g;
            let circleReg = redReg;
            let numReg = /\d.*?&nbsp/g;
            let doctorReg = /博士|亡神|龙德|白虎|将星|力士|天德|攀鞍|青龙|吊客|岁驿|小耗|大耗|月煞|官府|病符|息神|将军|咸池|伏兵|岁建|华盖|奏书|官符|指背|贯索|天煞|丧门|灾煞|喜神|晦气|劫煞|飞廉/g;
            let officerReg = /临官|帝旺|衰|胎|养|绝|死|墓|冠带|病|长生|沐浴/g;
            let qianxiReg = /命宫|父母|福德|田宅|官禄|奴仆|迁移|疾厄|财帛|子女|夫妻|兄弟/g;
            let shichenReg = /甲 子|甲 戌|甲 申|甲 午|甲 辰|甲 寅|乙 丑|乙 亥|乙 酉|乙 未|乙 巳|乙 卯|丙 寅|丙 子|丙 戌|丙 申|丙 午|丙 辰|丁 卯|丁 丑|丁 亥|丁 酉|丁 未|丁 巳|戊 辰|戊 寅|戊 子|戊 戌|戊 申|戊 午|己 巳|己 卯|己 丑|己 亥|己 酉|己 未|庚 午|庚 辰|庚 寅|庚 子|庚 戌|庚 申|辛 未|辛 巳|辛 卯|辛 丑|辛 亥|辛 酉|壬 申|壬 午|壬 辰|壬 寅|壬 子|壬 戌|癸 酉|癸 未|癸 巳|癸 卯|癸 丑|癸 亥/g;
            
            let result = []
            for(let i=0; i<resPan.length; i++){
                let k = this.$utils.delHtmlTag(resPan[i].toString());//将返回的数据去标签转化为字符串
                let r = k.match(redReg);//匹配红字，以下类推
                let o = k.match(orangeReg);
                let g = k.match(grayReg);
                let c = k.match(circleReg);
                let n = k.match(numReg);
                let d = k.match(doctorReg);
                let officer = k.match(officerReg);
                let q = k.match(qianxiReg);
                let shichen = k.match(shichenReg);
                if(r==null){
                    this.redTag.push('');
                }
                if(r!=null){
                    // 遍历匹配的每一个词组，插入样式标签，截取单字
                    for(let index=0;index<r.length;index++){
                       let position = k.indexOf(r[index]);
                       let blackTxt = k.substring(position+2,position+3)
                       r[index] = r[index] + "<span class='black-txt'>"+blackTxt+"</span>"
                    } 
                    this.redTag.push(r);
                }
                if(o==null){
                    this.orangeTag.push('');
                }
                if(o!=null){
                    // 遍历匹配的每一个词组，插入样式标签，截取单字
                    for(let index=0;index<o.length;index++){
                       let position = k.indexOf(o[index]);
                       let blackTxt = k.substring(position+2,position+3)
                       o[index] = o[index] + "<span class='black-txt'>"+blackTxt+"</span>"
                    } 
                    this.orangeTag.push(o);
                }
                if(g==null){
                    this.grayTag.push('');
                }
                if(g!=null){
                    this.grayTag.push(g);
                }
                if(c==null){
                    this.circleTag.push('');
                }
                if(c!=null){
                    // 遍历匹配的每一个词组，截取单字
                    for(let index=0;index<c.length;++index){
                       let position = k.indexOf(c[index]);
                       let circleTxt = k.substring(position+3,position+4)
                       c[index] =  circleTxt
                       if(c[index]==' '){
                           c.splice(index,1);
                           --index;//避免数组被删空跳出循环
                       }
                    } 
                    this.circleTag.push(c);
                }
                if(n==null){
                    this.numTag.push('');
                }
                if(n!=null){
                    //若只传入一位数，则添加为1－9的形式
                    if(n[0].indexOf('－')== '-1'){
                        n[0] = '1'+'－'+n[0]
                    }
                    this.numTag.push(n);
                }
                if(d==null){
                    this.doctorTag.push('');
                }
                if(d!=null){
                    this.doctorTag.push(d);
                }
                if(officer==null){
                    this.officerTag.push('');
                }
                if(officer!=null){
                    this.officerTag.push(officer);
                }
                if(q==null){
                    this.qianxiTag.push('');
                }
                if(q!=null){
                    this.qianxiTag.push(q);
                }
                if(shichen==null){
                    this.shichenTag.push('');
                }
                if(shichen!=null){
                    this.shichenTag.push(shichen);
                }
                result.push(k)         
            }
            console.log(result)
        },
        failure: function (res) {
            // console.log('123123')
        },
        resFormat: function (str) {
           return str.replace(/\s+|&nbsp/g, "");
        },
        drawTriangle: function (e){
            this.centerItem = true; //显示中间模块
            let id = e;
            let canvas = document.getElementById("canvas");//获取canvas对象
            let bgWidth = parseInt(this.$refs.canvas.width);
            let bgHeight = parseInt(this.$refs.canvas.height);
            let ctx = canvas.getContext("2d"); //创建二维的绘图上下文对象
            let x1 = 0;
            let y1 = 0;
            let x2 = bgWidth/4;
            let y2 = 0;
            let x3 = bgWidth/4*3;
            let y3 = 0;
            let x4 = bgWidth;
            let y4 = 0;
            let x5 = bgWidth;
            let y5 = bgHeight/4;
            let x6 = bgWidth;
            let y6 = bgHeight/4*3;
            let x7 = bgWidth;
            let y7 = bgHeight;
            let x8 = bgWidth/4*3;
            let y8 = bgHeight;
            let x9 = bgWidth/4;
            let y9 = bgHeight;
            let x10 = 0;
            let y10 = bgHeight;
            let x11 = 0;
            let y11 = bgHeight/4*3;
            let x12 = 0;
            let y12 = bgHeight/4;
            ctx.beginPath();
            ctx.linewidth=2;
            if (id==1){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x1,y1);
                ctx.lineTo(x5,y5);
                ctx.lineTo(x9,y9); 
                ctx.lineTo(x1,y1);
                ctx.lineTo(x7,y7);
            }else if (id==2){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x2,y2);
                ctx.lineTo(x6,y6);
                ctx.lineTo(x10,y10); 
                ctx.lineTo(x2,y2);
                ctx.lineTo(x8,y8);
            }else if (id==3){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x3,y3);
                ctx.lineTo(x7,y7);
                ctx.lineTo(x11,y11); 
                ctx.lineTo(x3,y3);
                ctx.lineTo(x9,y9);
            }else if (id==4){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x4,y4);
                ctx.lineTo(x8,y8);
                ctx.lineTo(x12,y12); 
                ctx.lineTo(x4,y4);
                ctx.lineTo(x10,y10);
            }else if (id==5){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x5,y5);
                ctx.lineTo(x9,y9);
                ctx.lineTo(x1,y1); 
                ctx.lineTo(x5,y5);
                ctx.lineTo(x11,y11);
            }else if (id==6){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x6,y6);
                ctx.lineTo(x10,y10);
                ctx.lineTo(x2,y2); 
                ctx.lineTo(x6,y6);
                ctx.lineTo(x12,y12);
            }else if (id==7){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x7,y7);
                ctx.lineTo(x11,y11);
                ctx.lineTo(x3,y3); 
                ctx.lineTo(x7,y7);
                ctx.lineTo(x1,y1);
            }else if (id==8){
                this.$refs.canvas.height = bgHeight;                
                ctx.moveTo(x8,y8);
                ctx.lineTo(x12,y12);
                ctx.lineTo(x4,y4); 
                ctx.lineTo(x8,y8);
                ctx.lineTo(x2,y2);
            }else if (id==9){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x9,y9);
                ctx.lineTo(x1,y1);
                ctx.lineTo(x5,y5); 
                ctx.lineTo(x9,y9);
                ctx.lineTo(x3,y3);
            }else if (id==10){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x10,y10);
                ctx.lineTo(x2,y2);
                ctx.lineTo(x6,y6); 
                ctx.lineTo(x10,y10);
                ctx.lineTo(x4,y4);
            }else if (id==11){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x11,y11);
                ctx.lineTo(x3,y3);
                ctx.lineTo(x7,y7); 
                ctx.lineTo(x11,y11);
                ctx.lineTo(x5,y5);
            }else if (id==12){
                this.$refs.canvas.height = bgHeight;
                ctx.moveTo(x12,y12);
                ctx.lineTo(x4,y4);
                ctx.lineTo(x8,y8); 
                ctx.lineTo(x12,y12);
                ctx.lineTo(x6,y6);
            }
            
           
            
            // ctx.moveTo(x1,y1);
            // ctx.lineTo(x5,y5);
            // ctx.lineTo(x9,y9);
            // ctx.moveTo(['x'+id],['y'+id]);
            // ctx.lineTo(['x'+(id+4)],['y'+(id+4)]);
            // ctx.lineTo(['x'+(id+8)],['y'+(id+8)]);
            ctx.closePath(); //closePath() 关闭路径  闭合
            ctx.strokeStyle="#D52F2E";// strokeStyle 只能填充该路径的颜色
            // ctx.moveTo('x'+id,'y'+id)
            // ctx.moveTo('x'+(id+6),'y'+(id+6))
            
            ctx.stroke();
        }
        
    }
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    .ziwei-box{
        width: 100%;
        padding: 0 8/75rem;
        box-sizing: border-box;
        @cellHeight: 290/75rem;
        .table-cell {
            position: relative;
            width: 100%;
            height: @cellHeight;
            border: 1px solid red;
            overflow-x: hidden;
            box-sizing: border-box;
            @media screen and(max-device-width:330px) {
                height: 330/75rem;
            }
            .tag-list{
                width: 100%;
                height: 100/75rem;
                @media screen and(max-device-width:330px) {
                    height: 110/75rem;
                }
                writing-mode: vertical-rl;
                writing-mode: tb-rl;
                margin-top: 3/75rem;
                letter-spacing: 8/75rem;
                .red-tag{
                    color: @baseColor;
                    font-weight: bold;
                    font-size: 12px;
                    width: 16.6666%;
                }
                .orange-tag{
                    color: #FF8918;
                    font-weight: bold;
                    font-size: 12px;
                    width: 16.6666%;
                }
                .gray-tag{
                    color: rgba(0,0,0,0.3);
                    font-size: 12px;
                    width: 16.6666%;
                    font-weight: bold;
                }
                /deep/ .black-txt{
                    color: rgba(0,0,0,1)!important;
                    font-size: 12px;
                    font-weight: bold;
                }
            }
            .row{
                width: 100%;
                box-sizing: border-box;
                margin-bottom: 3/75rem;
                padding: 0 3/75rem;
                .flex-between-only();
                .num-range{
                    font-size: 12/75rem;
                    color: rgba(0,0,0,0.3);
                    font-weight: bold;
                }
                .txt-circle{
                    width: 32/75rem;
                    height: 32/75rem;
                    .round(50%);
                    text-align: center;
                    line-height: 32/75rem;
                    background: @baseColor;
                    color: #fff;
                    font-weight: bold;
                    font-size: 24/75rem;
                }
                .doctor,.officer{
                    color: rgba(0,0,0,0.3);
                    font-weight: bold;
                    font-size: 12px; 
                }
            }
            .qianxi{
                width: 77/75rem;
                height: 30/75rem;
                margin:  0 auto;
                line-height: 30/75rem;
                .round(25/75rem);
                background: @baseColor;
                text-align: center;
                color: #fff;
                font-weight: bold;
            }
            .shichen{
                position: absolute;
                right: 8/75rem;
                bottom: 3/75rem;
                width: 20/75rem;
                color: #FF892C;
                font-weight: bold;
            }
        }
        .double-table-cell{
            width: 50%;
            box-sizing: border-box;
            height: @cellHeight*2;
            font-size: 24/75rem;
            .flex-col-only();
            @media screen and(max-device-width:330px) {
                height: 660/75rem;
            }
            .middle-item,.center-item{
                text-align: center;
                margin-bottom: 33/75rem;
            }
            .item-key{
                display: inline-block;
                margin-right: 12/75rem;
                font-weight: bold;
            }
        }
        .canvas-father{
            position: relative;
            overflow-y: hidden;
            #canvas{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 100%;
                height: 100%;
            }
        }
    }
    
}

</style>