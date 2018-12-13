<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>生肖配对</v-title-header>
        <div class="profile-wrap">
            <v-title-nav>
                <div slot="title" class="title-nav">男方资料</div>
                <div slot="more"></div>
            </v-title-nav>
            <div class="male-profile">
                <div>男生姓名：凯瑟琳</div>
                <div>出生公历：1980年11月23日15时10分</div>
                <div>农历：庚申年 十月 十六日 申时</div>
                <div>男方星座：射手座</div>
                <div>男方生肖：属猴</div>
                <div class="title-hunpei">男方属相婚配</div>
                <div>婚姻宜配：鼠、蛇、龙，此中属相相配为珠联璧合，一帆风顺，富贵成功，子孙兴旺。</div>
                <div>婚姻忌配：虎、猪，灾害多起，晚景尚可，但恐寿不到永，疾病困难。</div>
                <div>三合生肖：鼠、龙、猴</div>
                <div>六合生肖：蛇</div>
                <div>相冲生肖：虎</div>
                <div>相害生肖：猪</div>
                <div> 相刑生肖：虎、蛇</div>
            </div>
        </div>
        <div class="profile-wrap">
            <v-title-nav>
                <div slot="title" class="title-nav">女方资料</div>
                <div slot="more"></div>
            </v-title-nav>
            <div class="female-profile">
                <div>女生姓名：吴美玄</div>
                <div>出生公历：1980年11月23日15时10分</div>
                <div>农历：庚申年 十月 十六日 申时</div>
                <div>女方星座：射手座</div>
                <div>女方生肖：属猴</div>
                <div class="title-hunpei">女方属相婚配</div>
                <div>婚姻宜配：鼠、蛇、龙，此中属相相配为珠联璧合，一帆风顺，富贵成功，子孙兴旺。</div>
                <div>婚姻忌配：虎、猪，灾害多起，晚景尚可，但恐寿不到永，疾病困难。</div>
                <div>三合生肖：鼠、龙、猴</div>
                <div>六合生肖：蛇</div>
                <div>相冲生肖：虎</div>
                <div>相害生肖：猪</div>
                <div> 相刑生肖：虎、蛇</div>
            </div>
        </div>
        <div class="profile-wrap">
            <v-title-nav>
                <div slot="title" class="title-nav">男女生肖配对结果</div>
                <div slot="more"></div>
            </v-title-nav>
            <div class="result-profile">
                <h2>男猴女猴十二生肖配对结果</h2>
                <p>人会合谋去做有价值的事，这令相处更加愉快。你们是有着天然的密切感的一对。你们有着许许多多的共同点，但是幸福婚姻的前提建立在假设的基础之上。首先，如果你们改变以自我为中心的出发点，那么你们之间出现的问题将会大大减少；第二，如果你们能够停止互相猜忌，你们将会拥有更加稳固的关系；第三，如果你们能够客观理智地面对困境，危机将会很快过去；第四，如果你们能够倾心相与，你们的生活将会更加美妙和谐。</p>
            </div>
        </div>
        <button class="save-btn">立刻分享</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.profile-wrap {
    padding: 0 32/75rem;
}
.title-nav{
    font-size: 28/75rem;
    color:rgba(0,0,0,0.7);
    font-weight: bold;
}
.profile {
    width:100%;
    height:910/75rem;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    .round(33/75rem);
    padding: 8/75rem 0 24/75rem 24/75rem;
    .border-box();
    & > div {
        margin-top: 24/75rem;
        font-size: 26/75rem;
    }
    .title-hunpei {
        .title-nav();
        color:rgba(0,0,0,0.9);
    }
}
.wrap {
    .profile-wrap:nth-last-child(2) {
        margin-bottom: 180/75rem;
    }
    .male-profile {
        .profile();
        background:rgba(241,249,255,1);
    }
    .female-profile {
        .profile();
        background:rgba(255,241,241,1);
    }
    .result-profile {
        .profile();
        background:rgba(255,255,255,1);
        height:483/75rem;
        & > h2 {
            margin-top: 32/75rem;
            .title-nav();
            color:rgba(0,0,0,0.9);
        }
        & > p {
            margin-top: 25/75rem;
            text-indent:2em;
            font-size: 28/75rem;
        }
    }
}


</style>