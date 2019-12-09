import fs from "fs"
import frontmatter from "front-matter"

export const getApi = apiName => {
  const filePath = `./public/static/_api/${apiName}.md`;
  const file = fs.readFileSync(filePath);
  const json = frontmatter(file.toString());

  return json;
}

export const getAllApi = () => {
  const apiFolder = "./public/static/_api";
  const apis = fs.readdirSync(apiFolder);

  const test = apis.map(file => {
    const apiName = file.split('.md')[0]
    const api = getApi(apiName)

    return {
      slug: apiName,
      content: api.body,
      ...api.attributes
    }
  });

  return test
};

