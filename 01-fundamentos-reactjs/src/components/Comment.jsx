import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/erickhwk.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthor}>
              <strong>Erick Valente</strong>
              <time title="27 de Junho às 17:38" dateTime="2022-06-27 17:38:30">Há 5 minutos</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!! 👏👏👏</p>
        </div>

        <footer>
          <span>20</span>
          <button title="Curtir">
          <ThumbsUp size={20} />
          </button>
        </footer>
      </div>
    </div>
  )
}
