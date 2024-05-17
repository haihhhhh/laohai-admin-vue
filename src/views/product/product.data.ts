import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '产品名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '产品代码',
    dataIndex: 'code',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
    format: (text) => {
      return formatToDateTime(text);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '产品id',
    show: false,
    component: 'Input',
  },
  {
    field: 'name',
    label: '产品名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'code',
    label: '产品代码',
    required: true,
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
