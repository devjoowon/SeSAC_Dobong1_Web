import classNames from "classnames";
import Names from "classnames/bind";
import style1 from "../styles/style.module.css";

export default function ModuleCss() {
  const setting = Names.bind(style1);
  const isTrue = true;
  const value = "first";

  return (
    <div className={style1.container}>
      <h4>.module.css 적용</h4>
      <div className={style1.box2}>
        <div>안녕하세요</div>
      </div>
      <br />

      {/* 클래스 여러개 지정 */}
      {/* 1 */}
      <div className={`${style1.first} ${style1.second}`}>
        클래스 여러개 지정1 (백틱 사용)
      </div>

      {/* 2 */}
      {/* ["first", "second"] -> "first second" (중간에 띄어쓰기 있도록 합치기)*/}
      <div className={[style1.first, style1.second].join(" ")}>
        클래스 여러개 지정2 (join 이용)
      </div>

      {/* 3 */}
      <div className={classNames(style1.first, style1.second)}>
        classnames 메소드 이용 (install 필요)
      </div>

      {/* 4 */}
      {/* style1.~~~ 쓰지 않도록 setting 선언하고 함수처럼 이용 */}
      <div className={setting("first", "second")}>classnames 모듈 사용1</div>
      <div className={setting("first", { second: true })}>
        classnames 모듈 사용2
      </div>
      <div className={setting(value, { second: isTrue })}>
        classnames 모듈 사용3
      </div>
    </div>
  );
}
