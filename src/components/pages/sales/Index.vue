  <template>
    <app-master>
     <div id="show">
      <h3 align="center">List Sales</h3>      
      <el-row>
       <el-col :span="24">
        <el-table :data="tableData" style="width: 100%">
         <el-table-column prop="date" label="Date" width="180">
         </el-table-column>
         <el-table-column prop="name" label="Name" width="180">
         </el-table-column>
         <el-table-column prop="address" label="Address">
         </el-table-column>
       </el-table>
     </el-col>
   </el-row>
 </div>
</app-master>
</template>

<script>
  import AppMaster from '../../layouts/Master.vue'

 export default {
  components : {
    AppMaster
  },
  data() {
   return {
    tableData: [{
     date: '2016-05-03',
     name: 'Tom',
     address: 'No. 189, Grove St, Los Angeles'
   }, {
     date: '2016-05-02',
     name: 'Tom',
     address: 'No. 189, Grove St, Los Angeles'
   }, {
     date: '2016-05-04',
     name: 'Tom',
     address: 'No. 189, Grove St, Los Angeles'
   }, {
     date: '2016-05-01',
     name: 'Tom',
     address: 'No. 189, Grove St, Los Angeles'
   }]
 }
}
}
</script>