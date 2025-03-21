export const categoryNames = {
  financial: "#66bb6a",
  health: "#03a9f4",
  home: "#ff9800",
  personal: "#ffeb3b",
  work: "#ec05ff",
};

export type CategoryName = keyof typeof categoryNames;

export type CategoryId = number

export interface Category {
  categoryId: CategoryId
  categoryName: CategoryName;
  categoryTaskCount: number;
  categoryTaskCompletedCount: number;
}

export const defaultCategories: Category[] = Object.keys(categoryNames).map((categoryName, index) => ({
  categoryId: index,
  categoryName: categoryName as CategoryName,
  categoryTaskCount: 10,
  categoryTaskCompletedCount: 7,
}));
