/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2022-09-05 14:31:01
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-12 15:45:13
 * @FilePath: /tf-next-app/utils/constant.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 参数类型
export const paramTypes = [
  { label: '变量', value: 1 },
  { label: '定值', value: 2 },
];
// 传参类型
export const paramVarTypes = [
  { label: '字符', value: 'string' },
  { label: '数字', value: 'number' },
  { label: '小数', value: 'decimal' },
  { label: '布尔', value: 'boolean' },
  { label: '日期', value: 'datetime' },
];

// Groovy脚本 模板
export const groovyTemp = `import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * groovy脚本实现类
 */
public class GroovyCallerImpl implements GroovyCaller{

    /**
     * 解析
     * @param inMap      标识入参
     * @param resultInMap 数据返回入参
     * @return
     */
    @Override
    public Map<String, Object> parse(Map<String, String> inMap, Map<String, List<Object>> resultInMap) {

        Map<String,Object> result = new HashMap<>();
        // TODO 请在此处补充需要实现的业务逻辑


        return result;
    }
}`;


