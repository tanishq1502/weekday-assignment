export const getHeightWidth = (size) => {
  if (size === "default") return { height: "5rem", width: "5rem" };
  if (size === "sm") return { height: "3rem", width: "3rem" };
  if (size === "md") return { height: "6rem", width: "6rem" };
  if (size === "lg") return { height: "7rem", width: "7rem" };
};

export const checkLocation = (item, jobType) => {
  if (jobType?.length) {
    const result = jobType?.map((res) => {
      if (item?.location) {
        if (res?.title?.toLowerCase() === item?.location) return true;
        else if (res?.title === "InOffice" && item?.location !== "remote")
          return true;
        else return false;
      } else return false;
    });
    return result?.find((res) => res === true);
  } else return true;
};

export const checkJobRole = (item, roles) => {
  if (roles?.length) {
    return roles?.find((res) =>
      res?.title?.toLowerCase()?.includes(item?.jobRole)
    );
  } else return true;
};
export const checkExp = (item, experience) => {
  if (experience?.length) {
    return experience?.find((res) => res?.title >= item?.minExp);
  } else return true;
};

export const checkSalary = (item, salary) => {
  if (salary?.length) {
    return salary?.find(
      (res) => parseInt(res?.title) <= parseInt(item?.minJdSalary)
    );
  } else return true;
};

export const checkFilterCondition = (filters) => {
  return (
      (!filters?.["Roles"] && filters?.["Roles"]?.length === 0) &&
      (!filters?.["Experience"] && filters?.["Experience"]?.length === 0) &&
      (!filters?.["Minimum Base Pay Salary"] && filters?.["Minimum Base Pay Salary"]?.length === 0 ) &&
      (!filters?.["Job Type"] && filters?.["Job Type"]?.length === 0)
  );
};
