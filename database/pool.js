import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "us-east.connect.psdb.cloud",
  user: "4pvd3r40dlz3pk2brgsw",
  password: "pscale_pw_ahnKYXa2EDa2AnSVLrsljCmsOuVhhEPjXCIfTpIABiB",
  port: "3306",
  database: "wifnix",
  ssl: {
    rejectUnauthorized: false
  }
});

export { pool };
