image-community

📃 기능 구현 목록 
 
1. 게시글 
- 목록 가져오기
- 추가하기 (+이미지 업로드하기)
- 삭제하기  
- 수정하기 ✔️
2. 좋아요
- 게시글에 좋아요하기
- 게시글에 좋아요 취소하기
3. 회원가입하기 ✔️
4. 로그인하기  ✔️
5. 파이어베이스 or S3로 배포!


📃페이지별 상세페이지별 상세

1. 회원가입 페이지 
    1. 이메일 형식 체크, 비밀번호 체크할 것 ✔️
2. 로그인 페이지 
    1. 이메일, 패스워드 미기입 시 로그인 버튼 활성화 막을 것   
3. 메인 페이지(게시글 목록 페이지)
    1. 게시글 목록 노출
    2. 게시글 하나는 작성자, 작성 시간, 이미지 미리보기, 텍스트 내용으로 구성 
    3. 게시글 하나를 클릭 시, 게시글 상세 페이지로 이동
4. 글 작성 페이지
    1. 레이아웃 선택 버튼
        1. 3가지 레이아웃 중 선택하도록 한다.
            - 이미지가 오른편에, 텍스트는 왼편에 위치한 레이아웃
            - 이미지가 왼편에, 텍스트는 오른편에 위치한 레이아웃
            - 텍스트가 위에, 이미지는 아래에 위치한 레이아웃
        2. 레이아웃 선택 시, 게시글 레이아웃(모양새)대로 보이도록 한다.
        3. **텍스트, 이미지 중 입력 안된 게 있다면 게시글 작성 버튼 비활성화**
        4. 작성 완료 시 메인 페이지로 이동
5. 게시글 상세 페이지
    1. 게시글 레이아웃에 맞춰 이미지, 텍스트 위치 조절해서 노출
