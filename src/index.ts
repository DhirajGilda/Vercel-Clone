import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

// POSTMAN
app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  const id = generate(); // asd12
  await simpleGit().clone(repoUrl, `output/${id}`);
  res.json({
    id: id,
  });
});

app.listen(3000);

// Access Key ID 9ccb2587254df3b5d5dd48625b61acd9

// Secret Access Key  a0be91c21deb5a33bb8d0bc01afc0a19f3a80264f127303aa455e38e9757e294

// https://24bf8685817e1187628cb5254169a978.r2.cloudflarestorage.com

// hjiOCTEQw3JxOY0m6X0k7ks_Nzv3hV2qqEFDn8Tz
