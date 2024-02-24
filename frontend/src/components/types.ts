class ShiftData {
  name: string;
  isOks: OkNg[];

  constructor(name: string, length: number) {
    this.name = name;
    this.isOks = [];
    for (let i = 0; i < length; i++) {
      this.isOks.push(new OkNg(false));
    }
  }

  setName(name: string) {
    this.name = name;
  }
}

class OkNg {
  isOk: boolean;
  setIsOk(isOk: boolean) {
    this.isOk = isOk;
  }

  constructor(isOk: boolean) {
    this.isOk = isOk;
  }
}

const getSundayList = (year: number, month: number): string[] => {
  const res = [];
  const firstDayOfMonth = new Date(year, month-1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
    if (date.getDay() === 0) {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const str = `${month}/${day}`;
      res.push(str);
    }
  }

  return res;
};


export { OkNg, ShiftData, getSundayList };
