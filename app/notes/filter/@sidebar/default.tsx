import css from "./SidebarNotes.module.css";

export default function SidebarNotes() {
  const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <a
            href={`/notes/filter/${tag.toLowerCase()}`}
            className={css.menuLink}
          >
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}
