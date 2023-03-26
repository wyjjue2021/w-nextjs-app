/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-09 20:04:33
 * @FilePath: /tf-next-app/pages/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from '@/utils/serverFetch';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let server:{
    name:string
  } = await request.get('https://www.fastmock.site/mock/9b4de982fdd883225c4b467b90015aab/next-server/user')
  res.status(200).json({ name: server.name })
}
