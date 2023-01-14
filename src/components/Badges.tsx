import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Badges() {
  const router = useRouter();
  const goToReward = () => router.push("/reward");

  return (
    <section>
      <h1>Badges You&apos;ve Earned</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid xs={12} md={4}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/badges/in-love.png"
            alt="love smiley face"
            className="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/badges/fist-bump.png"
            alt="fist bump"
            className="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/badges/hello.png"
            alt="hello speech bubble"
            className="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
