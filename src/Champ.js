let champs = `마오카이
사일러스
사미라
제드
블리츠크랭크
엘리스
이렐리아
하이머딩거
피오라
케이틀린
카사딘
잭스
다리우스
갱플랭크
크산테
샤코
유미
모르가나
킨드레드
루시안
르블랑
노틸러스
벡스
아무무
파이크
아트록스
자크
아칼리
야스오
제이스
카르마
그레이브즈
애쉬
제라스
나미
우디르
리 신
에코
레오나
요네
럭스
애니비아
람머스
탈론
바루스
카타리나
빅토르
라이즈
마스터 이
이즈리얼
카이사
레넥톤
닐라
룰루
베인
트위치
드레이븐
티모
니달리
신드라
올라프
진
모데카이저
말파이트
아크샨
일라오이
세트
문도 박사
쓰레쉬
워윅
카밀
렉사이
뽀삐
렝가
나서스
럼블
이블린
벨베스
카시오페아
스웨인
자야
제리
헤카림
조이
가렌
카서스
레나타 글라스크
비에고
알리스타
피들스틱
그라가스
피즈
바이
케인
판테온
시비르
그웬
칼리스타
누누와 윌럼프
퀸
요릭
아지르
리산드라
다이애나
릴리아
말자하
아리
트린다미어
세주아니
트위스티드 페이트
클레드
블라디미르
미스 포츈
질리언
케넨
녹턴
신지드
오공
트리스타나
탈리야
렐
세나
갈리오
나르
키아나
브랜드
오른
쉔
소라카
자이라
탐 켄치
카직스
볼리베어
라칸
아펠리오스
아이번
리븐
사이온
니코
트런들
신 짜오
케일
쉬바나
세라핀
바드
징크스
베이가
오리아나
잔나
타릭
우르곳
코그모
아우렐리온 솔
벨코즈
브라움
자르반 4세
직스
초가스
소나
애니
코르키
`


let champList = champs.split("\n");

function benpick(list, name) {
	for (let index = 0; index < list.length; index++) {
		const element = list[index];
		if (element == name) {
			list[index] = "";
			break;
		}
	}
}

function arrayBenpick(list, arr) {
	for (let champ in arr) {
		benpick(list, champ);
	}
}

function getRandomChamp(list) {
	let size = list.length - 1;
	let num = (Random.getRandomChampNum());
	let champ = list[num];
	if (champ == "")
		return getRandomChamp(list);
	list = benpick(list, champ);
	return champ;
}
// for (let i=0; i<161; i++) {
// 	let n = getRandomChamp(champList);
// 	console.log(`${i} ${n}`);
// }

