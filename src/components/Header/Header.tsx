import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Logo />
        <span>БУНКЕР1920</span>
      </div>
      <div className={styles.right}>
        <div>
          <div className={styles.rightTitie}>СИСТЕМНАЯ СЕССИЯ 412(ТМ)</div>
          <div className={styles.abbreviation}>
            <div>
              <span>Б</span>ЮРО{" "}
            </div>
            <div>
              <span>У</span>СЛОВНО{" "}
            </div>
            <div>
              <span>Н</span>АУЧНО{" "}
            </div>
            <div>
              <span>К</span>ВАНТОВЫХ{" "}
            </div>
            <div>
              <span>Е</span>ДИНЫХ{" "}
            </div>
            <div>
              <span>Р</span>ЕЗУЛЬТАТОВ
            </div>
          </div>
          <div className={styles.version}>ВЕРСИЯ 1.0.0</div>
          <div className={styles.error}>ОШИБКА СИСТЕМЫ БЕЗОПАСНОСТИ</div>
          <div className={styles.protocol}>
            ПРОТОКОЛ ПОДКЛЮЧЕНИЯ СТАНДАРТА В14-23КР
          </div>
          <div className={styles.srever}>
            --- СЕРВЕР <span>5Т.3В.41.К1</span> (ОСТРОВ ВИЗЕ) ---
          </div>
          <div className={styles.coordinates}>
            --- КООРДИНАТЫ 79.538164, 76.88614 ---
          </div>
        </div>
      </div>
    </header>
  );
};
