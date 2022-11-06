import { useRouter } from "next/router";
import css from "./NotExist.module.css";

export const NotExist: React.FC = () => {
  const router = useRouter();

  return (
    <section className={css.page_404}>
      <div>
        <div>
          <div className={css.four_zero_four_bg}>
            <h1 className={css.text_404}>404</h1>
          </div>
          <div className={css.content_box_404}>
            <h3>Look like you are lost</h3>
            <p>the page you are looking for is not available!</p>
            <button onClick={() => router.back()} className={css.link_404}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
