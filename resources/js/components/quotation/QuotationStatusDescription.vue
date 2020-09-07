<template>
  <v-card>
    <v-card-title class="headline" primary-title>Quotation Status Description</v-card-title>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-chip>OPENED</v-chip>
              </td>
              <td>사용자에 의해서 데이터가 입련된 초기 상태를 의미합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>SUBMITTED</v-chip>
              </td>
              <td>
                사용자가 관리자에게 승인을 받기 위해서 생성한 Quote를 관리자에게 전송한 상태를 의미합니다.
                관리자는 전송된 Quote를 확인 문제가 없을 경우 승인을 해야 하며 문제가 있을시 거부를 할 수 있습니다.
              </td>
            </tr>
            <tr>
              <td>
                <v-chip>APPROVED</v-chip>
              </td>
              <td>전송된 Quote를 관리자가 승인한 경우를 의미하며 사용자는 관리자의 승인을 받은 Quote를 고객에게 즉시 전송해야 합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>REJECTED</v-chip>
              </td>
              <td>전송된 Quote를 관리자가 거부한 경우를 의미하며 사용자는 즉시 수정하여 다시 제출하여야 합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>SENT</v-chip>
              </td>
              <td>관라지로부터 승인 받은 Quote를 고객에게 전송한 상태를 의미합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>ACCEPTED</v-chip>
              </td>
              <td>고객에게 전송된 Quote를 고객으로부터 승인 됐음을 의미합니다. 사용자는 즉시 고객이 요청한 Quote의 내용을 수행하여야 합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>DENIED</v-chip>
              </td>
              <td>
                고객에게 전송한 Quote가 고객이 거부 하였음을 의미합니다.사용자는 즉시 새로운 견적서를 수정하여 제출 하여야 합니다.
                다시 수정하는 견적서는 리비전이 됩니다.
              </td>
            </tr>
            <tr>
              <td>
                <v-chip>HOLDING</v-chip>
              </td>
              <td>어떠한 이유로 절차가 중단된 것을 의미합니다. 문제가 해결되는 즉시 사용자는 절차를 재개 하여야 합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>COMPLETE</v-chip>
              </td>
              <td>모든 절차가 종료되었음을 의미합니다. 구체적으로 고객으로 부터 PO를 접수한 시점을 의미합니다.</td>
            </tr>
            <tr>
              <td>
                <v-chip>CANCELED</v-chip>
              </td>
              <td>고객 또는 자체 사정으로 인하여 더이상 Quote가 의미가 없을 경우를 의미합니다.</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="quotationDescriptionDialog = false">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>