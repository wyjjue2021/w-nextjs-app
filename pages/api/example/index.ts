/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-19 16:15:12
 * @FilePath: /tf-next-app/pages/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from '@/utils/serverFetch';
// import { selectStatistics } from './service'
import config from '@/utils/apiConfig';
import { AxiosResponse } from 'axios';

let url = 'https://www.tf56net.com/entryApi/pc/atms/atmsCore/visitorSupplierPool/querySpecialLineList'

type Data = {
  name: string
}

export  default async function specialLineListApi(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req,res)
  const { body = {} } = req;
  let server:any= await request.post(url,body)
  res.status(200).json({  ...server })
}

export const specialLineListServerApi = async (params:any): Promise<AxiosResponse<any>> =>{
  let server:any= await request.post(url,params)
  // console.log(server, 'server')
  return server
}
  
