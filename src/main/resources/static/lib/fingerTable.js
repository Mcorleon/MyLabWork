
$("#finger_table").bootstrapTable({ // 对应table标签的id
    url: "/getFingerInfo", // 获取表格数据的url
    cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
    striped: false,  //表格显示条纹，默认为false
    pagination: true, // 在表格底部显示分页组件，默认false
    pageList: [10, 20], // 设置页面可以显示的数据条数
    pageSize: 10, // 页面数据条数
    pageNumber: 1, // 首页页码
    columns: [
        {
            field: 'id', // 返回json数据中的name
            title: 'id', // 表格表头显示文字
            align: 'center', // 左右居中
            valign: 'middle' // 上下居中
        },
        {
            field: 'table_name',
            title: '表名',
            align: 'center',
            valign: 'middle'
        },
        {
            field: 'update_time', // 返回json数据中的name
            title: '更新时间', // 表格表头显示文字
            align: 'center', // 左右居中
            valign: 'middle' // 上下居中
        },
        {
            title: "操作",
            align: 'center',
            valign: 'middle',
            width: 160, // 定义列的宽度，单位为像素px
            formatter: function (value, row, index) {
                return '<a class="btn btn-danger btn-sm" onclick="return conf('+row.id+')" >删除</a>'+
                '<a class="btn btn-primary btn-sm" onclick="" href="" >使用指纹</a>';
            }


        }
    ],
    onLoadSuccess: function(){  //加载成功时执行
        console.info("加载成功");
    },
    onLoadError: function(){  //加载失败时执行
        console.info("加载数据失败");
    }

})
function conf(id) {
    if( confirm("确定删除指纹吗？")){
        $.ajax({
            type: "post",
            url: "/deleteFinger/"+id,
            data: {},
            cache: false,
            async: false,
            dataType: "json",
            success: function (data) {
                if(data){
                    window.location.reload();
                }
            }
        });
    }
}