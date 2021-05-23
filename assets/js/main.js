function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
// 윗버튼
$("#A").click(function () {
    let typeA = $("#typeA").val();
    const preValue = $("#" + typeA).val();
    $("#" + typeA).val(parseInt(preValue) + 1);
    next();
}); 

//중간버튼
$("#B").click(function () {
    let typeB = $("#typeB").val();
    const preValue = $("#" + typeB).val();
    $("#" + typeB).val(parseInt(preValue) + 1);
    next();
}); 

//아래버튼
$("#C").click(function () {
    let typeC = $("#typeC").val();
    const preValue = $("#" + typeC).val();
    $("#" + typeC).val(parseInt(preValue) + 1);
    next();
});

let num = 1;
// 객체 "" 안의 값은 id 값
let q = {
    1: { "title": "문제 1번", "typeA": "elec", "typeB": "pie", "typeC": "gong", "A": "전기", "B": "파이", "C": "공혁준" },
    2: { "title": "문제 2번", "typeA": "e", "typeB": "cow", "typeC": "tiger", "A": "이루리", "B": "가오가이", "C": "산범" },
    3: { "title": "문제 3번", "typeA": "big", "typeB": "ni", "typeC": "park", "A": "빅현배", "B": "니갸르", "C": "박준형" },
    4: { "title": "문제 4번", "typeA": "six", "typeB": "elec", "typeC": "pie", "A": "육지담", "B": "전기", "C": "파이" },
    5: { "title": "문제 5번", "typeA": "gong", "typeB": "e", "typeC": "cow", "A": "공혁준", "B": "이루리", "C": "가오가이" },
    6: { "title": "문제 6번", "typeA": "tiger", "typeB": "big", "typeC": "ni", "A": "산범", "B": "빅현배", "C": "니갸르" },
    7: { "title": "문제 7번", "typeA": "park", "typeB": "six", "typeC": "elec", "A": "박준형", "B": "육지담", "C": "전기" },
    8: { "title": "문제 8번", "typeA": "pie", "typeB": "gong", "typeC": "e", "A": "파이", "B": "공혁준", "C": "이루리" },
    9: { "title": "문제 9번", "typeA": "cow", "typeB": "tiger", "typeC": "big", "A": "가오가이", "B": "산범", "C": "빅현배" },
    10: { "title": "문제 10번", "typeA": "ni", "typeB": "park", "typeC": "six", "A": "니갸르", "B": "박준형", "C": "육지담" },
    11: { "title": "문제 11번", "typeA": "elec", "typeB": "pie", "typeC": "gong", "A": "전기", "B": "파이", "C": "공혁준" },
    12: { "title": "문제 12번", "typeA": "e", "typeB": "cow", "typeC": "tiger", "A": "이루리", "B": "가오가이", "C": "산범" },
    13: { "title": "문제 13번", "typeA": "big", "typeB": "ni", "typeC": "park", "A": "빅현배", "B": "니갸르", "C": "박준형" },
    14: { "title": "문제 14번", "typeA": "six", "typeB": "elec", "typeC": "pie", "A": "육지담", "B": "전기", "C": "파이" },
    15: { "title": "문제 15번", "typeA": "gong", "typeB": "e", "typeC": "cow", "A": "공혁준", "B": "이루리", "C": "가오가이" },
    16: { "title": "문제 16번", "typeA": "tiger", "typeB": "big", "typeC": "ni", "A": "산범", "B": "빅현배", "C": "니갸르" },
    17: { "title": "문제 17번", "typeA": "park", "typeB": "six", "typeC": "elec", "A": "박준형", "B": "육지담", "C": "전기" },
    18: { "title": "문제 18번", "typeA": "pie", "typeB": "gong", "typeC": "e", "A": "파이", "B": "공혁준", "C": "이루리" },
    19: { "title": "문제 19번", "typeA": "cow", "typeB": "tiger", "typeC": "big", "A": "가오가이", "B": "산범", "C": "빅현배" },
    20: { "title": "문제 20번", "typeA": "ni", "typeB": "park", "typeC": "six", "A": "니갸르", "B": "박준형", "C": "육지담" }

}
let result = {
    "elec": { "participant": "elec", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "pie": { "participant": "pie", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "gong": { "participant": "gong", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "e": { "participant": "e", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "cow": { "participant": "cow", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "tiger": { "participant": "tiger", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "big": { "participant": "big", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "ni": { "participant": "ni", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "park": { "participant": "park", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "six": { "participant": "six", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" },
    "retry": { "participant": "retry", "explain": " 설명", "img": "KakaoTalk_20210505_192824341.jpg" }

}


function next() {

    if (num === 20) {
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
        info.sort(function (a, b) {
            return b[sortingField] - a[sortingField];
        });
        console.log(info);
        console.log(info[0]['value']); var a = info[0]['value'];
        
        console.log(info[1]['value']); var b = info[1]['value'];
        console.log(info[2]['value']); var c = info[2]['value'];
        console.log(info[3]['value']); var d = info[3]['value'];
        if (a == b && a == c && a == d) {
            console.log('hello');
            const last = info[10]['name'];
            $("#img").attr("src", result[last]["img"]);
            $("#participant").html(result[last]["participant"]);
            $("#explain").html(result[last]["explain"]);

        } else {
            console.log(info[0]['value']);
            const first = info[0]['name'];
            $("#img").attr("src", result[first]["img"]);
            $("#participant").html(result[first]["participant"]);
            $("#explain").html(result[first]["explain"]);
        }

    } else {
        setTimeout(function(){console.log("timedelay")},4000);
        $('.disable').attr("disabled", true);
        setTimeout(function () { $('.disable').removeAttr("disabled"); }, 4500);
  
        $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#typeA").val(q[num]["typeA"]);
        $("#typeB").val(q[num]["typeB"]);
        $("#typeC").val(q[num]["typeC"]);
        //질문지 변경
        if(num ===1){
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        $("#C").html(q[num]["C"]);
        } else
        setTimeout(function(){$("#A").html(q[num]["A"]);},500);
        setTimeout(function(){$("#B").html(q[num]["B"]);},500);
        setTimeout(function(){$("#C").html(q[num]["C"]);},500);
        num = num + 1;
    }

}
// css restart
$("button").click(function (e) {
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
});


