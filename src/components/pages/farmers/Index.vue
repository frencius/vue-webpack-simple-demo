<template>
  <el-table
  :data="tableData"
  border
  style="width: 100%">
  <el-table-column
  fixed
  prop="date"
  label="Date"
  width="150">
</el-table-column>
<el-table-column
prop="name"
label="Name"
width="120">
</el-table-column>
<el-table-column
prop="state"
label="State"
width="120">
</el-table-column>
<el-table-column
prop="city"
label="City"
width="120">
</el-table-column>
<el-table-column
prop="address"
label="Address"
width="300">
</el-table-column>
<el-table-column
prop="zip"
label="Zip"
width="120">
</el-table-column>
<el-table-column
fixed="right"
label="Operations"
width="120">
<template scope="scope">
  <el-button @click="handleClick" type="text" size="small">Detail</el-button>
  <el-button type="text" size="small">Edit</el-button>
</template>
</el-table-column>
</el-table>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>