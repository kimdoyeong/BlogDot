const handlingAxiosError = e => {
  if (process.env.NODE_ENV === "development") {
    console.error(e);
  }
  if (e.response && e.response.data && e.response.data.message) {
    alert(e.response.data.message);
  } else {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
  }
};

export default handlingAxiosError;
