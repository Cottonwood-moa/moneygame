function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
function backButton(){
    if(num === 2 ){
        refreshPage();
    }
    num = num -2 ;
    const latestType =  array.pop(); // 마지막에 점수를 얻은 타입네임.
    const preValue = $("#" + latestType).val();
    if(latestType!=null){
        $("#" + latestType).val(parseInt(preValue) - 1);
    }
    $('.disable').attr("disabled", true);
    setTimeout(function () { $('.disable').removeAttr("disabled"); }, 1500);
    $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
    $("#title").html(content[num]["title"]);
    $("#typeA").val(content[num]["typeA"]);
    $("#typeB").val(content[num]["typeB"]);
    $("#typeC").val(content[num]["typeC"]);
    //질문지 변경
    setTimeout(function () {
        $("#A").html(content[num]["A"]);
        $("#B").html(content[num]["B"]);
        $("#C").html(content[num]["C"]);
        num = num+1;
    }, 100);
    console.log($("#elec").val());

}


// array.shift(); //배열 첫번째 원소 삭제
// array.unshift();// 배열 첫번째 원소 추가
// array.push(); //배열 마지막 원소 추가
// array.pop();// 배열 마지막 원소 삭제 (값도 반환됨)

function refreshPage() {
    $("body").hide();
    window.location.reload();
}
// 윗버튼
let array =[];
$("#A").click(function () {
    let typeA = $("#typeA").val();
    const preValue = $("#" + typeA).val();
    $("#" + typeA).val(parseInt(preValue) + 1);
    array.push(typeA);
    next();
});
//중간버튼
$("#B").click(function () {
    let typeB = $("#typeB").val();
    const preValue = $("#" + typeB).val();
    $("#" + typeB).val(parseInt(preValue) + 1);
    array.push(typeB);
    next();
});
//아래버튼
$("#C").click(function () {
    let typeC = $("#typeC").val();
    const preValue = $("#" + typeC).val();
    $("#" + typeC).val(parseInt(preValue) + 1);
    array.push(typeC);
    next();
});
//폴드
$("#D").click(function () {
    array.push(null);
    next();
});
let num = 1;
// 객체 "" 안의 값은 id 값
let content = {
    1: { "title": "상황 1. 당신은 춥디추운 방안에서 잠을 자야한다. 당신이 구매할 물품은?", "typeA": "elec", "typeB": "pie", "typeC": "gong", "A": "이불", "B": "전기장판", "C": "폐지" },
    2: { "title": "상황 2. 게임에 참여한 사람들이 모여서 의견을 나누고 있다. 당신의 행동은?", "typeA": "e", "typeB": "cow", "typeC": "tiger", "A": "조용히 듣고 있는다.", "B": "분위기를 주도하려 한다.", "C": "적당히 웃으며 맞장구 친다." },
    3: { "title": "상황 3. 내기에서 진 참여자가 배변을 치우고 있다. 당신의 행동은?", "typeA": "elec", "typeB": "ni", "typeC": "park", "A": "신경쓰지 않는다.", "B": "그래도 도와준다.", "C": "도와주는 척 구경한다." },
    4: { "title": "상황 4. 참여자들이 모여서 소주를 마시고 있다. 당신의 행동은?", "typeA": "big", "typeB": "elec", "typeC": "pie", "A": "조용히 방으로 가서 피자를 시켜먹는다.", "B": "안마시고 가만히 앉아있는다.", "C": "러브샷~러브샷~" },
    5: { "title": "상황 5. 참여자 중 한 명이 짜증나는 행동을 한다.  당신의 행동은? ", "typeA": "gong", "typeB": "e", "typeC": "cow", "A": "참았다가 한 번에 터트린다.", "B": "그래도 같은 동료인데 안고간다.", "C": "할말은 해야겠다." },
    6: { "title": "상황 6. 별로 친하지 않은 참여자가 당신을 포섭하려고 한다. 당신의 행동은?", "typeA": "ni", "typeB": "six", "typeC": "park", "A": "일단 알겠다고 하고 상황을 지켜본다.", "B": "다 같이 고생하는데 니편내편이 어딨나. 거절한다.", "C": "편 나누는건 좋은데 너는 아니다." },
    7: { "title": "상황 7. 다음 날 아침, 예상금액보다 100만원이 더 차감됐다. 당신의 행동은?", "typeA": "park", "typeB": "six", "typeC": "cow", "A": "(아 뭐 100만원 가지고 난리야~) 누워서 하품을 한다.", "B": "참여자들에게 좀 아껴쓰자고 성질을 낸다.", "C": "사람들에게 지난 밤 지출을 물어보고 계산한다." },
    8: { "title": "상황 8. 참여자 몇 명이 방에 들어가서 당신을 못 들어오게 하고 이야기를 하고 있다. 당신의 행동은? ", "typeA": "pie", "typeB": "gong", "typeC": "e", "A": "욕을 하며 성질을 내고 따진다.", "B": "마음에 두고 있다가 크게 터뜨린다.", "C": "내가 무슨 잘못을 했거니 하며 자책한다." },
    9: { "title": "상황 9. 참여자 두 명이 언쟁하다 몸싸움이 붙었다. 당신의 행동은?", "typeA": "cow", "typeB": "tiger", "typeC": "big", "A": "나서서 통제한다.", "B": "방관한다.", "C": "방에 들어가서 피자를 시킨다." },
    10: { "title": "상황 10. 참여자들이 아예 술판을 벌이고 있다. 당신의 행동은?", "typeA": "ni", "typeB": "park", "typeC": "pie", "A": "말은 하지 않고 한심하게 쳐다본다.", "B": "원샷을 못하면 장가를 못가요~", "C": "화투를 사온다." },
    11: { "title": "상황 11. 당신이 싫어하는 참여자가 말도 안되는 이유로 당신에게 자진퇴소를 요구한다. 당신의 행동은?", "typeA": "elec", "typeB": "six", "typeC": "big", "A": "개소리 말라며 극딜을 넣는다.", "B": "괴성을 지르며 깽판을 친다.", "C": "자진퇴소한다." },
    12: { "title": "상황 12. 좋아하던 참여자가 당신을 떨어뜨리려고 한다. 당신의 행동은?", "typeA": "e", "typeB": "cow", "typeC": "tiger", "A": "조용히 칼을 간다.", "B": "쿨한척 떨어진다.", "C": "방에서 춤을 춘다." },
    13: { "title": "상황 13. 당신은 하루치 개인비용을 다 썼는데 배가 고프다. 당신의 행동은?", "typeA": "gong", "typeB": "ni", "typeC": "park", "A": "싼 음식 하나 시켜먹고 이실직고한다. ", "B": "굶는다.", "C": "먹고 아닌척 한다." },
    14: { "title": "상황 14. 참여자 중 한 명이 1억원으로 정보를 구매하여 당신에게 알려준다. 당신의 행동은?", "typeA": "six", "typeB": "elec", "typeC": "pie", "A": "미쳤나? 바로 사람들에게 말한다.", "B": "이미 쓴 돈은 어쩔 수 없고 정보를 이용해 같이 이길 방안을 모색한다.", "C": "같은 편인척 하다가 나중에 배신한다." },
    15: { "title": "상황 15. 당신은 머니게임 안에서 샤워가 필요하다고 생각하는가?", "typeA": "gong", "typeB": "e", "typeC": "cow", "A": "샤워는 무슨 ㅋ", "B": "남을 위한 최소한의 배려라고 생각한다.", "C": "이성도 있는데 꽃단장 해야지" },
    16: { "title": "상황 16.  방안에서 할것도 없고 심심하다. 당신의 행동은?", "typeA": "tiger", "typeB": "big", "typeC": "ni", "A": "춤을 춘다.", "B": "피자를 시켜먹는다.", "C": "스쿼트를 한다." },
    17: { "title": "상황 17. 옆방에 사람들이 시끄럽게 떠들고 있다. 당신의 행동은?", "typeA": "park", "typeB": "six", "typeC": "elec", "A": "나도 끼워줘", "B": "벽을 두드리고 따진다.", "C": "지금 캠핑왔냐? 라고 안들리게 말한다." },
    18: { "title": "상황 18. 당신은 당신을 믿고 있는 사람을 떨어뜨려야 하는 상황에 놓여있다. 당신의 행동은?", "typeA": "pie", "typeB": "gong", "typeC": "e", "A": "응~ 잘가~", "B": "그럴바엔 돈 다쓰고 자폭한다.", "C": "차라리 내가 떨어지겠다." },
    19: { "title": "상황 19. 참여자들이 두 파벌로 나뉘어 언쟁을 하다가 분위기가 격양되었다. 당신의 행동은?", "typeA": "cow", "typeB": "six", "typeC": "big", "A": "상황을 진정시키고 문제를 해결하려한다.", "B": "같이 성질부리고 고함지르며 욕설을 내뱉는다.", "C": "방으로 들어가 피자를 시킨다." },
    20: { "title": "상황 20. 당신은 혈투끝에 상금을 거머쥐었는데 팀이었던 사람들이 상금을 좀 나눠달라 한다. 당신의 행동은?", "typeA": "ni", "typeB": "park", "typeC": "six", "A": "사정이 딱한 팀원들에게만 조금 나눠준다.", "B": "응~ 안줘~ 나도 돈 없어~", "C": "그래도 팀이었는데 나눠줘야지." }
}
let result = {
    "elec": { "participant": "논리왕 전기", "explain": '"재밌었어, 인정?"', "img": "/assets/img/elec.png" }, //5
    "pie": { "participant": "파이", "explain": '"존X 노잼 오케이"', "img": "/assets/img/pie.webp" }, //6
    "gong": { "participant": "공혁준", "explain": '"재밌긴 했어.<br> 우리 없었으면 개씹노잼일거야."', "img": "/assets/img/gong.png" },//6
    "e": { "participant": "이루리", "explain": '"우리를 위해 뭘 하셨냐고요."', "img": "/assets/img/e.jpg" },//6
    "cow": { "participant": "가오가이", "explain": '"누군가를 믿잖아? 끝까지 믿어야 돼. 근데 누군가를 의심하잖아? 끝까지 의심해야 돼."', "img": "/assets/img/cow.jpg" },//7
    "tiger": { "participant": "산범", "explain": "덩실덩실~", "img": "/assets/img/tiger.png" },//4
    "big": { "participant": "빅현배", "explain": '"N빵이요? 흠.. 첨들어보는데..일단 3KG만 주십쇼."', "img": "/assets/img/big.webp" },//5
    "ni": { "participant": "니갸르", "explain": '"본인이 약하다는 말을 했잖아. 그러면 우리가 그걸 이용하는 거야."', "img": "/assets/img/ni.png" },
    "park": { "participant": "박준형", "explain": '"특 스페셜 모둠 초밥으로 주세요."', "img": "/assets/img/park.jpg" },//7
    "six": { "participant": "육지담", "explain": '"언니 저 무서워요."', "img": "/assets/img/six.jpg" },//8
    "retry": { "participant": "다시시도", "explain": "혹시 선택지를 아무거나 찍진 않았나요? 답변에 일관성이 없다고 판단되었습니다.<br> 다시해보세요!", "img": "/assets/img/retry.jpg" }
}
function next() {
    if (num === 21) {
        $(".question").hide();
        $(".result").show();
        var info = [
            { name: $("#elec").attr('id'), value: $("#elec").val() },
            { name: $("#pie").attr('id'), value: $("#pie").val() },
            { name: $("#gong").attr('id'), value: $("#gong").val() },
            { name: $("#e").attr('id'), value: $("#e").val() },
            { name: $("#cow").attr('id'), value: $("#cow").val() },
            { name: $("#tiger").attr('id'), value: $("#tiger").val() },
            { name: $("#big").attr('id'), value: $("#big").val() },
            { name: $("#ni").attr('id'), value: $("#ni").val() },
            { name: $("#park").attr('id'), value: $("#park").val() },
            { name: $("#six").attr('id'), value: $("#six").val() },
            { name: $("#retry").attr('id'), value: $("#retry").val() },
        ]
        var sortingField = "value";
        var a = info[0]['value'];
        var b = info[1]['value'];
        var c = info[2]['value'];
        var d = info[3]['value'];
        info.sort(function (a, b) {
            return b[sortingField] - a[sortingField];
        });
        if (a == b && a == c && a == d) {
            console.log("helloworld")
            const last = info[10]['name'];
            $("#yourResult").hide();
            $("#img").attr("src", result[last]["img"]);
            $("#participant").html(result[last]["participant"]);
            $("#explain").html(result[last]["explain"]);
        } else if (a == b) {
            $(".second").show();
            const first = info[0]['name'];
            const second = info[1]['name'];
            $("#img").attr("src", result[first]["img"]);
            $("#participant").html(result[first]["participant"]);
            $("#explain").html(result[first]["explain"]);
            $("#img2").attr("src", result[second]["img"]);
            $("#participant2").html(result[second]["participant"]);
            $("#explain2").html(result[second]["explain"]);
        }
        else {
            const first = info[0]['name'];
            $("#img").attr("src", result[first]["img"]);
            $("#participant").html(result[first]["participant"]);
            $("#explain").html(result[first]["explain"]);
        }
    } else {
        $('.disable').attr("disabled", true);
        setTimeout(function () { $('.disable').removeAttr("disabled"); }, 1500);
        $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
        $("#title").html(content[num]["title"]);
        $("#typeA").val(content[num]["typeA"]);
        $("#typeB").val(content[num]["typeB"]);
        $("#typeC").val(content[num]["typeC"]);
        //질문지 변경
        setTimeout(function () {
            $("#A").html(content[num]["A"]);
            $("#B").html(content[num]["B"]);
            $("#C").html(content[num]["C"]);
            num = num + 1;
        }, 100);
    }
}

// css restart
$(".removeClass").click(function (e) {
    $("#backToMain").removeClass("fadeInE");
    setTimeout(function () {
        $("#backToMain").addClass("fadeInE");
    }, 0);
    $("#title").removeClass("fadeIn");
    setTimeout(function () {
        $("#title").addClass("fadeIn");
    }, 0);
    $("#A").removeClass("fadeInA");
    setTimeout(function () {
        $("#A").addClass("fadeInA");
    }, 0);
    $("#B").removeClass("fadeInB");
    setTimeout(function () {
        $("#B").addClass("fadeInB");
    }, 0);
    $("#C").removeClass("fadeInC");
    setTimeout(function () {
        $("#C").addClass("fadeInC");
    }, 0);
    $("#D").removeClass("fadeInD");
    setTimeout(function () {
        $("#D").addClass("fadeInD");
    }, 0);
});

