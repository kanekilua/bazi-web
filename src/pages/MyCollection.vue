<template>
    <div class="wrap">
        <v-title-header>
            我的收藏
        </v-title-header>
        <div class="content-wrap">
            <div class="collection-list">
                <div class="collection-item" v-for="(item,index) in List" :key="index">
                    <img :src="item.url">
                    <div class="text">
                        <h2>{{item.title}}</h2>
                        <p>{{item.artical}}</p>
                    </div>
                    <i class="exit" @click="exit(index)"></i>
                </div>
            </div>
        </div>
        <!-- 弹窗 -->
        <div v-transfer-dom>
            <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '30%', 'background-color': 'transparent'}">
                <div class="img-dialog">
                    <img class="fan" src="../assets/image/mine/fan.png">
                    <button class="ask">确定不再收藏此文章？</button>
                    <div class="btn-list">
                        <button class="cancel" @click="showDialogStyle = false">取消</button>
                        <button class="confirm" @click="deleteItem()">确认</button>
                    </div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>

<script>
import {XDialog,TransferDomDirective as TransferDom} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            showDialogStyle: false,
            List: [
                {
                    url: require('../assets/image/mine/collection.png'),
                    title: '遇到难题你会请教同事吗',
                    artical: '一个人不管做什么，都不可能一帆风顺，因为会有一个学习的过程，有一个适应环境的过程，还有一个搭建人脉的过程。这些过程不仅需要时间，还需要努力让自己变得更优秀。职场上的拼搏很辛苦，因为会遇到一些靠自己一个人难解决的问题。非常运势测试网认为找人帮忙确实能起到很好的作用，你遇到难题会请教同事吗?'
                },
                {
                    url: require('../assets/image/mine/collection.png'),
                    title: '222遇到难题你会请教同事吗',
                    artical: '一个人不管做什么，都不可能一帆风顺，因为会有一个学习的过程，有一个适应环境的过程，还有一个搭建人脉的过程。这些过程不仅需要时间，还需要努力让自己变得更优秀。职场上的拼搏很辛苦，因为会遇到一些靠自己一个人难解决的问题。非常运势测试网认为找人帮忙确实能起到很好的作用，你遇到难题会请教同事吗?'
                },
                {
                    url: require('../assets/image/mine/collection.png'),
                    title: '333遇到难题你会请教同事吗',
                    artical: '一个人不管做什么，都不可能一帆风顺，因为会有一个学习的过程，有一个适应环境的过程，还有一个搭建人脉的过程。这些过程不仅需要时间，还需要努力让自己变得更优秀。职场上的拼搏很辛苦，因为会遇到一些靠自己一个人难解决的问题。非常运势测试网认为找人帮忙确实能起到很好的作用，你遇到难题会请教同事吗?'
                },
                {
                    url: require('../assets/image/mine/collection.png'),
                    title: '444遇到难题你会请教同事吗',
                    artical: '一个人不管做什么，都不可能一帆风顺，因为会有一个学习的过程，有一个适应环境的过程，还有一个搭建人脉的过程。这些过程不仅需要时间，还需要努力让自己变得更优秀。职场上的拼搏很辛苦，因为会遇到一些靠自己一个人难解决的问题。非常运势测试网认为找人帮忙确实能起到很好的作用，你遇到难题会请教同事吗?'
                },
            ],
            Index: '0',
        }
    },
    methods: {
        // x键
        exit: function(index) {
            this.showDialogStyle = true;
            this.Index=index;
        },
        //确认删除收藏
        deleteItem: function() {
            this.List.splice(this.Index,1);
            this.showDialogStyle = false;
        },
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    .collection-list{
        width: 686/75rem;
        margin: 40/75rem auto;
        .collection-item{
            position: relative;
            .flex-between-only();
            width: 100%;
            padding: 34/75rem;
            margin-bottom: 50/75rem;
            .border-box();
            .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            .round(34/75rem);
            & > img{
                width: 178/75rem;
                height: 138/75rem;
            }
            .text{
                padding-left: 60/75rem;
                .border-box();
                & > h2{
                    margin: 10/75rem 0;
                    font-size: 28/75rem;
                }
                & > p{
                    .ellipsis(2);
                }
            }
            .exit{
                position: absolute;
                right: 0;
                top: -7/75rem;
                display: inline-block;
                width: 44/75rem;
                height: 44/75rem;
                background: url('../assets/image/common/exit.png') no-repeat center center / 100% 100%;
            }
        }
    }
}
// 弹窗
/deep/ .weui-dialog{
    .flex-center();
    .img-dialog{
        position: relative;
        width: 90%;
        margin: 0 auto;
        .flex-col();
        & > button {
            display: block;
            width: 100%;
            height: 105/75rem;
            border: none;
            outline: none;
            &:active{
                background: #eee;
            }
        }
        .ask{
            height: 154/75rem;
            .round(45/75rem 45/75rem 0 0);
            background: #fff;
            font-size: 28/75rem;
        }
        .btn-list{
            .flex-start();
            width: 100%;
            height: 87/75rem;
            line-height: 87/75rem;
            .round(0 0 45/75rem 45/75rem);
            background: @baseColor;
            & > button{
                .my-button();
                width: 50%;
                height: 100%;
                font-size: 28/75rem;
            }
            .cancel{
                .round(0 0 0 45/75rem);
                color: #000;
            }
            .confirm{
                .round(0 0 45/75rem 0);
                background: @baseColor;
            }
        }
        .fan{
            position: absolute;
            right: 68/75rem;
            top: -78/75rem;
            width: 158/75rem;
            height: 118/75rem;   
        }
    }
}
</style>