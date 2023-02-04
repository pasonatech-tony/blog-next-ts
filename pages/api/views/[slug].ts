import { db } from "../../../lib/firebase";

export default async (req, res) => {
  if (req.method === "GET") {
    let responseSent = false;
    db.ref("views")
      .child(req.query.slug)
      .once("value", async (snapshot) => {
        if (!responseSent) {
          let views = snapshot.val();
          if (!views) {
            views = 0;
            await db.ref("views").child(req.query.slug).set(0);
          }
          res.status(200).json({ total: views });
          responseSent = true;
        }
      });
  }

  // increment the views
  if (req.method === "POST") {
    const ref = db.ref("views").child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }
      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }
};
