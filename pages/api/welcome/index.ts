/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-14 21:42:32
 * @FilePath: /tf-next-app/pages/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from '@/utils/serverFetch';
// import { selectStatistics } from './service'

type Data = {
  name: string
}

export async function apiSelectStatistics(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let server:{
    name:string
  } = {
    name:'123123'
  }//await selectStatistics
  console.log(server, 'server')
  res.status(200).json({ name: server.name })
}
