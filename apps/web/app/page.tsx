import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {dbClient} from "@repo/db/client"


export default async function Home() {
  const user = await dbClient.user.findFirst()
  return (
    <div className={""}>
      {
        user?.username
      }
      {
          user?.password

      }
    </div>
  );
}
