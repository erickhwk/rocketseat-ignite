import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/erickhwk.png" />
          <div className={styles.authorInfo}>
            <strong>Erick Valente</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="27 de Junho às 17:38" dateTime="2022-06-27 17:38:30">Publicado há 30 minutos</time>

      </header>
      <div className={styles.content}>
        <p>Fala galera!!</p>
        <p>Acabei de subir mais projeto pro portifa. É um projeto que fiz no LWN Return, evento da Rocketseat. Segue o link!</p>
        <p><a href="#">erickv.dev</a></p>
        <p>
          <ul>
            <li><a href="#">#novoprojeto</a></li>
            <li><a href="#">#lwn</a></li>
            <li><a href="#">#rocketseat</a></li>
          </ul>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <button type="submit">Publicar</button>
      </form>
    </article>
  )
}
