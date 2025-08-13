export default function CalisthenicsProgramPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        3-Месечна Калистеник Програма за Начинаещи
      </h1>
      <p className="mb-8 text-lg text-gray-700">
        Тази програма е подходяща за начинаещи, които искат да изградят
        основна сила и да усвоят базови умения в калистениката.
      </p>

      {/* Месец 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Месец 1: Изграждане на основа</h2>
        <p className="mb-4 text-gray-600">Седмици 1-4 — Тренировки за цяло тяло, 3 пъти седмично</p>
        <div className="space-y-3">
          <WorkoutItem text="Загрявка: 5–10 мин леко кардио (скачане на въже, клекове, високи колена)" />
          <WorkoutItem text="Лицеви опори — 3× 8–12 повторения" />
          <WorkoutItem text="Набирания / обърнато гребане — 3× 5–8 повторения (с ластик при нужда)" />
          <WorkoutItem text="Кофички — 3× 8–12 повторения" />
          <WorkoutItem text="Клекове — 3× 15–20 повторения" />
          <WorkoutItem text="Напади — 3× 10–15 повторения на крак" />
          <WorkoutItem text="Планк — 3× 30–60 сек" />
          <WorkoutItem text="Разтягане: 5–10 мин" />
        </div>
      </section>

      {/* Месец 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Месец 2: Повишаване на интензивността и умения</h2>
        <p className="mb-4 text-gray-600">Седмици 5-8 — 4 тренировки седмично</p>
        
        <h3 className="text-xl font-medium mt-4 mb-2">Ден 1 и 4 — Горна част</h3>
        <div className="space-y-2">
          <WorkoutItem text="Лицеви опори — 4× 10–15" />
          <WorkoutItem text="Набирания / обърнато гребане — 4× 6–10" />
          <WorkoutItem text="Кофички — 4× 10–15" />
          <WorkoutItem text="Пайк лицеви опори — 3× 8–12" />
          <WorkoutItem text="Планк към лицева опора — 3× 10–15" />
        </div>

        <h3 className="text-xl font-medium mt-4 mb-2">Ден 2 и 3 — Долна част и корем</h3>
        <div className="space-y-2">
          <WorkoutItem text="Клекове — 4× 20–25" />
          <WorkoutItem text="Напади — 4× 15–20 на крак" />
          <WorkoutItem text="Мост за седалище — 3× 20–25" />
          <WorkoutItem text="Повдигане на прасци — 3× 20–25" />
          <WorkoutItem text="Повдигане на крака от вис — 3× 8–12" />
          <WorkoutItem text="Руска преса — 3× 20 на страна" />
        </div>
      </section>

      {/* Месец 3 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Месец 3: Умения и напреднали упражнения</h2>
        <p className="mb-4 text-gray-600">Седмици 9-12 — 4-5 тренировки седмично</p>

        <h3 className="text-xl font-medium mt-4 mb-2">Ден 1 и 4 — Горна част</h3>
        <div className="space-y-2">
          <WorkoutItem text="Лицеви опори с наклон надолу — 4× 10–15" />
          <WorkoutItem text="Набирания — 4× 8–12" />
          <WorkoutItem text="Кофички — 4× 10–15" />
          <WorkoutItem text="Арчър лицеви опори — 3× 6–10 на страна" />
        </div>

        <h3 className="text-xl font-medium mt-4 mb-2">Ден 2 и 3 — Долна част и корем</h3>
        <div className="space-y-2">
          <WorkoutItem text="Асистирани пистол клекове — 4× 6–10 на крак" />
          <WorkoutItem text="Български клек — 4× 10–15 на крак" />
          <WorkoutItem text="Еднокраков мост за седалище — 3× 15–20 на крак" />
          <WorkoutItem text="Повдигане на прасци — 3× 25–30" />
          <WorkoutItem text="Повдигане на крака от вис — 3× 10–15" />
          <WorkoutItem text="Чистачки за стъкла — 3× 10–15 на страна" />
        </div>
      </section>
    </div>
  );
}

function WorkoutItem({ text }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-green-600 font-bold">•</span>
      <p className="text-gray-800">{text}</p>
    </div>
  );
}
