<script setup>
const calendarData = reactive({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  currentDay: new Date().getDay(),
  firstDayOfMonth: 1,
  day: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  monthes: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  date: new Date(),
});

const calendar = () => {
  const days = [];
  let week = 0;
  let a;
  days[week] = [];
  const lastDayOfMonth = new Date(calendarData.year, calendarData.month + 1, 0).getDate();
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (new Date(calendarData.year, calendarData.month, i).getDay() != calendarData.firstDayOfMonth) {
      a = { index: i };
      days[week].push(a);
    } else {
      week++;
      days[week] = [];
      a = { index: i };
      days[week].push(a);
    }
  }
  if (days[0].length > 0) {
    for (let i = days[0].length; i < 7; i++) {
      days[0].unshift('');
    }
  }
  return days;
};

const decrease = () => {
  calendarData.month--;
  if (calendarData.month < 0) {
    calendarData.month = 11;
    calendarData.year--;
  }
};

const increase = () => {
  calendarData.month++;
  if (calendarData.month > 11) {
    calendarData.month = 0;
    calendarData.year++;
  }
};

const getWeekends = (dayIndex) => {
  const curentDayIndex = new Date(`${calendarData.month + 1} ${dayIndex}, ${calendarData.year}`).getDay();
  return curentDayIndex === 6 || curentDayIndex === 0;
};
const getCurrentDay = (dayIndex) => {
  const currentMonth = new Date().getMonth();
  return calendarData.date.getDate() === dayIndex && calendarData.month === currentMonth;
};
// const getEventDays = (dayIndex) => {
// };
</script>

<template>
  <div class="calendar">
    <h2 class="calendar__title">События</h2>
    <div class="calendar__head">
      <button class="calendar__button" @click="decrease()"><Icon name="ic:baseline-chevron-left" size="32" /></button>

      <h3>{{ calendarData.monthes[calendarData.month] }} {{ calendarData.year }}</h3>

      <button class="calendar__button" @click="increase()"><Icon name="ic:baseline-chevron-right" size="32" /></button>
    </div>
    <div class="calendar__body">
      <div class="calendar__container">
        <div class="calendar__days" v-for="day in calendarData.day">{{ day }}</div>
      </div>

      <div class="calendar__container" v-for="week in calendar()">
        <NuxtLink
          to="/"
          class="calendar__days calendar__links"
          :class="{
            'calendar__days-current': getCurrentDay(day.index),
            'calendar__days-weekends': getWeekends(day.index),
          }"
          v-for="(day, index) in week"
          >{{ day.index }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  display: flex;
  flex-direction: column;
  max-width: 336px;
  width: 100%;
  &__title {
    border-bottom: 0.5px solid #c9c9c9;
    height: 40px;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border: 2px solid #37c4cd;
    border-radius: 10px;
    color: #37c4cd;
    background-color: white;
    transition: all linear 0.3s;
    &:hover {
      color: white;
      background-color: #37c4cd;
      cursor: pointer;
    }
  }
  &__head {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__container {
    display: flex;
  }
  &__days {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    color: black;
    font-size: 18px;
    line-height: 22px;

    &-current {
      color: white;
      background-color: #37c4cd;
    }
    &-weekends {
      color: red;
    }
  }
  &__links {
    text-decoration: none;
    transition: all linear 0.3s;
    &:hover {
      color: white;
      background-color: #37c4cd;
    }
  }
  .test {
    display: flex;
    gap: 10px;
  }
}
</style>
