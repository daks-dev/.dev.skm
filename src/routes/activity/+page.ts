import type { PageLoad } from './$types';

export const load = (async () => ({
  infographic: [
    {
      icon: (await import('$lib/content/activity/info.0.png?w=160&meta')).default,
      title: 'Обследование зданий и сооружений',
      content: `
      <p>При эксплуатации зданий и сооружений, реконструкции, капитальном ремонте, часто возникают вопросы с определением их фактического технического состояния, для определения которого необходимо проведение комплексных мероприятий по обследованию несущих и ограждающих строительных конструкций, а так же инженерных систем.</p>
      <p>Обследование зданий и сооружений проводится в соответствии с ФЗ №384 «Технический регламент о безопасности зданий и сооружений», а так же ГОСТ 31937-2009 «Здания и сооружения. Правила обследования и мониторинга технического состояния». СП 13-12-2003 «Правила обследования несущих и ограждающих строительных конструкций зданий и сооружений».</p>
      <p>В ходе проведения обследовательских работ, специалисты выявляют и фиксируют дефекты, а так же определяют их классификацию и влияние на эксплуатационную надежность здания и сооружения. Проводится комплекс инструментального обследования с применением высокотехнологичного оборудования, для определения физико-механических характеристик возведенных конструкций, а также состояние и качество монтажа инженерных систем.</p>
      `
    },
    {
      icon: (await import('$lib/content/activity/info.1.png?w=160&meta')).default,
      title: 'Лабораторное сопровождение строительства',
      content: `
      <p>При производстве строительно-монтажных работ , одной из основных задач является контроль качества строительных материалов и продукции поступающей на площадки. В данном направлении осуществления деятельности Компания «Масштаб» предоставляет полный перечень услуг по определению:</p>
      <ul>
        <li>&nbsp;характеристик качества бетонной смеси;</li>
        <li>оценке качества и количества арматурных изделий;</li>
        <li>оценке качества каменных и армокаменных конструкций;</li>
        <li>оценка качества готовых изделий и конструкций поступающих на строительную площадку;</li>
        <li>комбинированное определение прочности бетона неразрушающими методами по ГОСТ 17624, ГОСТ 22690, ГОСТ 18105;</li>
        <li>определение физико-механических характеристик арматурной стали;</li>
        <li>контроль качества сварных соединений;</li>
        <li>определение плотности грунтов основания и обратной засыпки;</li>
        <li>контроль качества ухода за монолитными конструкциями при отрицательных температурах.</li>
      </ul>
      `
    },
    {
      icon: (await import('$lib/content/activity/info.2.png?w=160&meta')).default,
      title: 'Геодезия и мониторинг',
      content: `
      <p>Компания «Масштаб» выполняет работы по геодезии и мониторингу за строительными объектами.</p>
      <p>Мониторинг является одним из важнейших инструментов обеспечения надежности и безопасности при строительстве и эксплуатации высотных и большепролетных зданий и сооружений. Значительный объем инструментального мониторинга в период строительства и эксплуатации выполняется геодезическими методами. Геодезическими методами определяются как местные, так и общие деформации зданий и сооружений, отклонения несущих, ограждающих конструкций от вертикали и проектного положения, осадки фундаментов и грунтов, по которым конкретно судят о техническом состоянии здания или сооружения.</p>
      <p>Целесообразность проведения мониторинга по эксплуатируемым объектам определяет Экспертная комиссия по оценке надежности конструктивных решений и проверке технического состояния строительных конструкций большепролетных, высотных и других уникальных сооружений, проектируемых и построенных в Москве (распоряжение Правительства Москвы № 320-РП от 03.03.04 г.).</p>
      <p>Геодезический мониторинг является составной частью общего геотехнического мониторинга и проводится современными традиционными геодезическими методами и приборами в период возведения зданий и сооружений. После возведения зданий и сооружений надлежит преимущественно использовать автоматизированные системы контроля деформации.</p>
      <p>Геодезический мониторинг включает измерения (наблюдения), фиксацию результатов измерений, их математическую обработку, вычисление параметров деформаций и составление заключений (при превышении измеренных параметров допустимых значений).</p>
      <p>Технологии и методики геодезического мониторинга разрабатываются в составе ППГР в разделе «Геодезический мониторинг» на основании технического задания.</p>
      `
    },
    {
      icon: (await import('$lib/content/activity/info.3.png?w=160&meta')).default,
      title: 'Судебная техническая экспертиза',
      content: `
      <p>Судебная экспертиза назначается и проводится в случаях, когда для выявления обстоятельств необходимы специальные знания в науке, технике, искусстве или ремесле.</p>
      <p>Судебно-техническая экспертиза – это целый ряд мероприятий, проведение которых подразумевает использование измерительных приборов, а также требует специальных знаний. Данные виды исследований проводятся при ведении административных, гражданских и уголовных дел. Судебно-техническая экспертиза выполняется исключительно независимым экспертам высочайшей квалификации.</p>
      <p>Проведение судебно-технические экспертизы регламентируется Федеральным законом №73 «О государственной судебно-экспертной деятельности в РФ».</p>
      <ul>
        <li>Предсудебная&nbsp; экспертиза;</li>
        <li>Независимая судебно-техническая экспертиза.</li>
      </ul>
      `
    },
    {
      icon: (await import('$lib/content/activity/info.4.png?w=160&meta')).default,
      title: 'Энергоэффективность и воздухпроницаемость',
      content: `
      <p>Компания «Масштаб» выполняет работы по контролю и оценке энергоэффективности зданий и сооружений нового строительства при вводе в эксплуатацию, а так же эксплуатируемых объектов.</p>
      <p>При подтверждении оценки соответствия возведенных конструкций здания требованиям проектной документации является сравнительный анализ проектных результатов расчета раздела «Энергоэффективность», фактическим показателям полученным по результатам энергоаудита.</p>
      <ul>
        <li>тепловизионное обследование зданий и сооружений;</li>
        <li>оформление энергетического паспорта (Форма 35 Минэнерго России);</li>
        <li>оценка воздухопроницаемости ограждающих конструкций.</li>
      </ul>
      `
    }
  ]
})) satisfies PageLoad;
