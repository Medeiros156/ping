export async function ping() {
  try {
    const res = await fetch(`https://back-fqrl.onrender.com/ping/ping`, {
      headers: {},
      body: null,
      method: "GET",
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const pingRoutes = async (req, res) => {
  console.log("pingReceive");
  try {
    res.status(200).json({});
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};
