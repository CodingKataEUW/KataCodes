export default function CalisthenicsProgramTable() {
  const rows = [
    // Месец 1 — Седмици 1–4 (Цяло тяло)
    {
      phase: "Месец 1",
      block: "Седмици 1–4",
      frequency: "3 пъти седмично (напр. Пон/Ср/Пет)",
      day: "Цяло тяло",
      items: [
        "Загрявка: 5–10 мин леко кардио",
        "Класически лицеви опори — 3× 8–12",
        "Набирания / гребане под наклон — 3× 5–8 (с ластик при нужда)",
        "Кофички — 3× 8–12",
        "Клекове — 3× 15–20",
        "Напади — 3× 10–15 / крак",
        "Планк — 3× 30–60 сек",
        "Разтягане: 5–10 мин",
      ],
    },

    // Месец 2 — Седмици 5–8 (Разделена тренировка + умения)
    {
      phase: "Месец 2",
      block: "Седмици 5–8",
      frequency: "4 пъти седмично",
      day: "Ден 1 и 4 — Горна част",
      items: [
        "Загрявка: 5–10 мин леко кардио",
        "Класически лицеви опори — 4× 10–15",
        "Набирания / гребане под наклон — 4× 6–10",
        "Кофички — 4× 10–15",
        "Лицеви опори в пике — 3× 8–12",
        "Планк до лицева опора — 3× 10–15",
        "Разтягане: 5–10 мин",
      ],
    },
    {
      phase: "Месец 2",
      block: "Седмици 5–8",
      frequency: "4 пъти седмично",
      day: "Ден 2 и 3 — Долна част + Корем",
      items: [
        "Загрявка: 5–10 мин леко кардио",
        "Клекове — 4× 20–25",
        "Напади — 4× 15–20 / крак",
        "Мостове за глутеус — 3× 20–25",
        "Повдигане на пръсти — 3× 20–25",
        "Вдигане на крака от вис — 3× 8–12",
        "Руски обрати — 3× 20 / страна",
        "Разтягане: 5–10 мин",
      ],
    },
    {
      phase: "Месец 2",
      block: "Седмици 5–8",
      frequency: "Умения 2–3 пъти седмично (след тренировка)",
      day: "Умения",
      items: [
        "Стоене на ръце до стена — 3× 20–30 сек",
        "L-седеж прогресии (тък седеж) — 3× 10–15 сек",
      ],
    },

    // Месец 3 — Седмици 9–12 (Напреднали + умения)
    {
      phase: "Месец 3",
      block: "Седмици 9–12",
      frequency: "4–5 пъти седмично",
      day: "Ден 1 и 4 — Горна част",
      items: [
        "Загрявка: 5–10 мин леко кардио",
        "Лицеви опори с наклон надолу — 4× 10–15",
        "Набирания — 4× 8–12",
        "Кофички — 4× 10–15",
        "Странични (арчер) лицеви опори — 3× 6–10 / страна",
        "Планк до лицева опора — 3× 15–20",
        "Разтягане: 5–10 мин",
      ],
    },
    {
      phase: "Месец 3",
      block: "Седмици 9–12",
      frequency: "4–5 пъти седмично",
      day: "Ден 2 и 3 — Долна част + Корем",
      items: [
        "Загрявка: 5–10 мин леко кардио",
        "Пистолетни клекове (с помощ) — 4× 6–10 / крак",
        "Български клекове — 4× 10–15 / крак",
        "Еднокраков мост — 3× 15–20 / крак",
        "Повдигане на пръсти — 3× 25–30",
        "Вдигане на крака от вис — 3× 10–15",
        "Чистачки (windshield wipers) — 3× 10–15 / страна",
        "Разтягане: 5–10 мин",
      ],
    },
    {
      phase: "Месец 3",
      block: "Седмици 9–12",
      frequency: "Умения 3–4 пъти седмично",
      day: "Умения",
      items: [
        "Стоене на ръце без опора — 3× 20–30 сек",
        "L-седеж задържане — 3× 10–20 сек",
        "Мъсл-ъп прогресии — 3× 3–5 (скачащи/с ластик)",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="overflow-x-auto rounded-md">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-sm font-semibold border">Фаза</th>
              <th className="px-3 py-2 text-left text-sm font-semibold border">Седмици / Блок</th>
              <th className="px-3 py-2 text-left text-sm font-semibold border">Честота</th>
              <th className="px-3 py-2 text-left text-sm font-semibold border">Ден / Фокус</th>
              <th className="px-3 py-2 text-left text-sm font-semibold border">Тренировка</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="align-top">
                <td className="px-3 py-3 text-sm border whitespace-nowrap">{r.phase}</td>
                <td className="px-3 py-3 text-sm border whitespace-nowrap">{r.block}</td>
                <td className="px-3 py-3 text-sm border">{r.frequency}</td>
                <td className="px-3 py-3 text-sm border whitespace-nowrap">{r.day}</td>
                <td className="px-3 py-3 text-sm border">
                  <ul className="list-disc pl-5 space-y-1">
                    {r.items.map((it, idx) => (
                      <li key={idx} className="text-sm">{it}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Съвети */}
      <div className="mt-6 text-sm">
        <h3 className="font-semibold mb-2">Допълнителни съвети</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Почивай добре между тренировките и слушай тялото си.</li>
          <li>Храни се балансирано с достатъчно протеин за възстановяване.</li>
          <li>Бъди постоянен и увеличавай натоварването постепенно.</li>
        </ul>
      </div>
    </div>
  );
}
