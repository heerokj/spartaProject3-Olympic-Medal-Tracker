## Olympic Medal Tracker
리액트 라이브러리를 활용한 CRUD 연습
<br>
<br>

## 프로젝트 소개 및 목적
2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 Olympic Medal Tracker를 구현하였습니다.

- 컴포넌트와 리액트 훅 요소를 다루고 이벤트를 관리하는 연습
- 리액트에서 상태(state)가 무엇인지 이해하고 잘 활용하기 위함
- 컴포넌트 분리하는 연습과 리펙토링을 통해 배우는 코드 작성 연습
<br>

## 🕰개발 기간
24.08.08(목요일)~24.08.13(화요일)
<br>
<br>

## 프로젝트 구조
![Uploading {프로젝트 구조}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/projectStructure.png)

<br>
<br>

## 프로젝트 설치 및 실행 방법
1. 코드 다운로드 받기<br>
해당 리포지토리 메인 페이지에서 <>Code 버튼 클릭 후 맨 밑의 Download ZIP를 눌러 다운로드 합니다.

![Uploading {사용방법1}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%951.png)
<br>

2. 다운로드 받은 코드 추가하기<br>
VScode를 실행시킨 후 File -> Open Folder -> 다운받은 폴더를 열어줍니다.

![Uploading {사용방법2}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%952.png)
<br>

3. 프로젝트 실행시키기<br>
작업 영역에 추가한 프로젝트를 확인하고, 터미널에서 해당 프로젝트 위치로 들어가 npm start 또는 yarn dev 명령어를 입력한 후 실행시킵니다.
해당 포트번호로 실행시킵니다.<br>
🚨 실행하기 전, npm 또는 yarn을 설치가 선행으로 이뤄줘야 합니다.

![Uploading {사용방법3}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%953.png)
![Uploading {실행}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/%EC%8B%A4%ED%96%89.png)
<br>


## 주요 기능
1. 입력<br>
국가명, 금메달, 은메달, 동메달을 입력 한 후 국가추가 버튼을 클릭합니다.<br>
국가명을 입력하지 않고 국가 추가 버튼을 클릭 할 경우 "국가명을 입력해주세요."란 알람창이 나옵니다.

![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/create1.png)

2. 읽기<br>
입력했던 값이 제대로 추가됐는지 확인합니다.

![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/create2.png)

3. 수정<br>
이미 추가했던 국가명을 입력한 후 업데이트 할 금메달, 은메달, 동메달을 입력하고 업데이트 버튼을 클릭합니다.<br>
국가명을 입력하지 않고 업데이트 버튼을 클릭 할 경우 "국가명을 입력해주세요."란 알람창이 나옵니다.<br>
등록되지 않은 국가를 업데이트 버튼을 클릭 할 경우 "등록되지 않은 국가입니다."란 알람창이 나옵니다.<br>

![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/update1.png)
![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/update2.png)

4. 삭제<br>
추가 되었던 데이터 오른쪽에 있는 삭제 버튼을 클릭 하면 해당 데이터가 삭제됩니다.<br>
삭제 전, 확인 알람창이 나옵니다.<br>

![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/delete.png)
![Uploading {}](https://github.com/heerokj/spartaProject3-Olympic-Medal-Tracker/blob/main/src/assets/delete2.png)




