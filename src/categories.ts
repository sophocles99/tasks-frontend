export const categoryNames = {
  financial: "#66bb6a",
  health: "#03a9f4",
  home: "#ff9800",
  personal: "#ffeb3b",
  work: "#ec05ff",
};

export type CategoryName = keyof typeof categoryNames;

interface Category {
  categoryName: CategoryName;
  categoryTaskCount: number;
  categoryTaskCompletedCount: number;
}

export const defaultCategories: Category[] = Object.keys(categoryNames).map((categoryName) => ({
  categoryName: categoryName as CategoryName,
  categoryTaskCount: 10,
  categoryTaskCompletedCount: 7,
}));
