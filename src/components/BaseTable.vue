<script setup lang="ts">
export interface IBaseTableColumn {
  title: string;
  align: string;
  field: string;
}

export interface IBaseTableRow {
  [x: string]: string | number;
}

export interface IBaseTable {
  columns: IBaseTableColumn[];
  rows: IBaseTableRow[];
}

defineProps<IBaseTable>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(col, i) in columns"
          :key="i"
          :class="`px-2 text-white ${col.align}`"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <td
          v-for="(col, j) in columns"
          :key="j"
          :class="`px-2 text-white ${col.align}`"
        >
          {{ row[col.field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
