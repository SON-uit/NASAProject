const baseAPI = "http://localhost:5000";
async function httpGetPlanets() {
  const response = await fetch(`${baseAPI}/planet`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${baseAPI}/launch`);
  const fetchLaunches = await response.json();
  return fetchLaunches.sort((a, b) => a.flightNumber - b.flightNumber); 
}
async function httpSubmitLaunch(launch) {
  try {
    await fetch(`${baseAPI}/launch`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: false,
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    await fetch(`${baseAPI}/launch/${id}`, {
      method: "delete",
    });
    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: false,
    }
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
