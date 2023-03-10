import { Header } from "components/Header";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.systemAdm}>
          Системный администратов - Араков Игорь Васильевич - допуск (Д2-У2)
        </div>
        <div className={styles.user}>
          Авторизованный пользователь - Гачиров Виталий Викторович - допуск
          (Д1-У1)
        </div>
        <div className={styles.error}>
          <span>ОШИБКА СИСТЕМЫ БЕЗОПАСНОСТИ</span> - Сервер был подвержен
          миграции в общую сеть интернета, система была атакована проектом 12.21
          (К/Н - БИНАРНЫЙ РАЗУМ)
        </div>
        <div>
          Уважаемый Виталий Викторович, с учетом того, что система была атакована
          проектом 12.21 (К/Н - БИНАРНЫЙ РАЗУМ), во извбежания нежелательных утечек, обратитесь в
          службу безопасности для переписания протаколов по номеру +7(4234)314-442-16-322-1920 /добавочный (Шифр Лауза)
        </div>
      </div>
    </>
  );
};
