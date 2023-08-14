import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav>
        <span>
          <h1>ES52</h1>
          <div>
            <p>
              Erling Skakkes gate 52B
              <br />
              7012, Trondheim
              <br />
              lnr: H0203
            </p>
          </div>
        </span>
        <img src="planlosning.svg"></img>
      </nav>
      <div className="kort">
        <span>
          <div className="kulepunkt inverted active">
            <p>1</p>
          </div>
          <h2>Stue</h2>
        </span>

        <ul>
          <li>Ikke åpne det nederste vinduet her (TODO legg inn link)</li>
        </ul>
      </div>
    </main>
  );
}
