import ModProfile, { mods } from "../../components/ModProfile";
import styles from "../../styles/about_pages/Mods.module.css";
import utility from "../../styles/Utility.module.css";

export default function Mods() {
  console.log(mods);
  return (
    <div className={styles.container + " " + utility.borderThickTop}>
      <h1>Mods</h1>
      {mods.map((mod, idx) => (
        <div key={idx}>
          <ModProfile username={mod.username} url={mod.url} />
          <span>{mod.role}</span>
          {mod.experience.length ? (
            <>
              <h4>Experience:</h4>
              <ul>
                {mod.experience.map((exp, idx) => (
                  <li
                    key={idx}
                    className={styles.experienceText}
                    dangerouslySetInnerHTML={{ __html: exp }}
                  ></li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
