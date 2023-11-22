import jsreport from "@jsreport/browser-client";

const generateReport = async () => {
  // console.log(users);
  jsreport.serverUrl = "http://localhost:5555";
  const report = await jsreport.render({
    template: {
      shortid: "L1BWZXGM4",
    },
  });

  // download the output to the file
  report.download(`myreport${Math.random()}.pdf`);

  // // open output in the new window
  // report.openInWindow({ title: "myreport" });
};
export { generateReport };
