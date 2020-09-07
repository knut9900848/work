<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', 'Api\HomeController@login');
Route::post('/logout', 'Api\HomeController@logout');

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('/user', 'Api\HomeController@getUser');

    /* ------------------------------------------------------------------------------------ */
    /* Admin */
    /* ------------------------------------------------------------------------------------ */

    // Route::middleware(['can:access-default-data'])->group(function() {

    // Defaullt Data Dashboard
    Route::get('/admin/default-data', 'Api\Admin\DefaultDataController@getDefaultData');

    // Branch
    Route::post('/admin/branches', 'Api\Admin\BranchController@store');
    Route::put('/admin/branches/{id}', 'Api\Admin\BranchController@update');

    // Bank
    Route::post('/admin/banks', 'Api\Admin\BankController@store');
    Route::put('/admin/banks/{id}', 'Api\Admin\BankController@update');

    // Currency
    Route::post('/admin/currencies', 'Api\Admin\CurrencyController@store');
    Route::put('/admin/currencies/{id}', 'Api\Admin\CurrencyController@update');

    // Unit
    Route::post('/admin/units', 'Api\Admin\UnitController@store');
    Route::put('/admin/units/{id}', 'Api\Admin\UnitController@update');

    // Country
    Route::post('/admin/countries', 'Api\Admin\CountryController@store');
    Route::put('/admin/countries/{id}', 'Api\Admin\CountryController@update');

    // Payment Method
    Route::post('/admin/payment-methods', 'Api\Admin\PaymentMethodController@store');
    Route::put('/admin/payment-methods/{id}', 'Api\Admin\PaymentMethodController@update');

    // Payment Terms
    Route::post('/admin/payment-terms', 'Api\Admin\PaymentTermsController@store');
    Route::put('/admin/payment-terms/{id}', 'Api\Admin\PaymentTermsController@update');

    // Manpower Discipline
    Route::get('/admin/manpower-disciplines', 'Api\Admin\ManpowerDisciplineController@index');
    Route::post('/admin/manpower-disciplines', 'Api\Admin\ManpowerDisciplineController@store');
    Route::put('/admin/manpower-disciplines/{id}', 'Api\Admin\ManpowerDisciplineController@update');

    // Manpower Position
    Route::post('/admin/manpower-positions', 'Api\Admin\ManpowerPositionController@store');
    Route::put('/admin/manpower-positions/{id}', 'Api\Admin\ManpowerPositionController@update');

    // Shipping Method
    Route::post('/admin/shipping-methods', 'Api\Admin\ShippingMethodController@store');
    Route::put('/admin/shipping-methods/{id}', 'Api\Admin\ShippingMethodController@update');

    // Delivery Terms
    Route::post('/admin/delivery-terms', 'Api\Admin\DeliveryTermsController@store');
    Route::put('/admin/delivery-terms/{id}', 'Api\Admin\DeliveryTermsController@update');

    // Labor wage
    Route::post('/admin/labor-wages', 'Api\Admin\LaborWageController@store');
    Route::put('/admin/labor-wages/{id}', 'Api\Admin\LaborWageController@update');

    // Deaprtemnt
    Route::get('/admin/departments', 'Api\Admin\DepartmentController@index');
    Route::post('/admin/departments', 'Api\Admin\DepartmentController@store');
    Route::put('/admin/departments/{id}', 'Api\Admin\DepartmentController@update');

    // Position
    Route::post('/admin/positions', 'Api\Admin\PositionController@store');
    Route::put('/admin/positions/{id}', 'Api\Admin\PositionController@update');

    // Member
    Route::get('/admin/members', 'Api\Admin\MemberController@index');
    Route::post('/admin/members', 'Api\Admin\MemberController@store');
    Route::put('/admin/members/{id}', 'Api\Admin\MemberController@update');
    Route::get('/admin/members/{id}/get-roles', 'Api\Admin\MemberController@getRoles');
    Route::post('/admin/members/{id}/async-roles', 'Api\Admin\MemberController@asyncRoles');
    Route::get('/admin/members/{id}/get-permissions', 'Api\Admin\MemberController@getPermissions');
    Route::post('/admin/members/{id}/async-permissions', 'Api\Admin\MemberController@asyncPermissions');
    Route::patch('/admin/members/{id}/upload-avatar', 'Api\Admin\MemberController@uploadAvatar');

    // Member Approval Amount
    Route::get('/admin/members/{member_id}/approval-amounts', 'Api\Admin\MemberApprovalAmountController@index');
    Route::post('/admin/members/{member_id}/approval-amounts', 'Api\Admin\MemberApprovalAmountController@store');
    Route::put('/admin/members/{member_id}/approval-amounts/{approval_id}', 'Api\Admin\MemberApprovalAmountController@update');
    Route::get('/admin/members/{member_id}/approval-amounts/{approval_id}', 'Api\Admin\MemberApprovalAmountController@show');

    // Role
    Route::get('/admin/roles', 'Api\Admin\RoleController@index');
    Route::post('/admin/roles', 'Api\Admin\RoleController@store');
    Route::post('/admin/roles/{role_id}', 'Api\Admin\RoleController@update');
    Route::post('/admin/roles/{id}/async-role', 'Api\Admin\RoleController@asyncRole');
    Route::get('/admin/roles/{id}/getPermissions', 'Api\Admin\RoleController@getPermissions');

    // Permission
    Route::get('/admin/permissions', 'Api\Admin\PermissionController@index');
    Route::post('/admin/permissions', 'Api\Admin\PermissionController@store');
    Route::put('/admin/permissions/{permission_id}', 'Api\Admin\PermissionController@update');

    // Purchase Order Terms and Conditions
    Route::get('/admin/purchase-order-terms-and-conditions', 'Api\Admin\PurchaseOrderTermsAndConditionsController@index');
    Route::post('/admin/purchase-order-terms-and-conditions', 'Api\Admin\PurchaseOrderTermsAndConditionsController@store');
    Route::put('/admin/purchase-order-terms-and-conditions/{file_id}', 'Api\Admin\PurchaseOrderTermsAndConditionsController@update');
    Route::delete('/admin/purchase-order-terms-and-conditions/{file_id}', 'Api\Admin\PurchaseOrderTermsAndConditionsController@destroy');
    Route::get('/admin/purchase-order-terms-and-conditions/{file_id}/download', 'Api\Admin\PurchaseOrderTermsAndConditionsController@download');

    // });

    /* ------------------------------------------------------------------------------------ */
    /* My Page */
    /* ------------------------------------------------------------------------------------ */

    Route::get('/account/get-member-info', 'Api\AccountController@getAccountInfo');
    Route::put('/account/update-member-info', 'Api\AccountController@updateAccountInfo');

    /* ------------------------------------------------------------------------------------ */
    /* Common */
    /* ------------------------------------------------------------------------------------ */
    // Item
    // Route::post('/items', 'Api\ItemController@store');

    // Field
    Route::post('/fields', 'Api\FieldController@store');

    // File
    Route::get('/files/model/{model}/model_id/{model_id}', 'Api\FileController@index');
    Route::post('/files', 'Api\FileController@store');
    Route::get('/files/{file_id}/storage/{storage}/download', 'Api\FileController@download');
    Route::delete('/files/{file_id}/storage/{storage}', 'Api\FileController@destroy');

    // Comment
    Route::get('/comments/model/{model}/model_id/{model_id}', 'Api\CommentController@index');
    Route::post('/comments', 'Api\CommentController@store');
    Route::put('/comments/{comment_id}', 'Api\CommentController@update');
    Route::delete('/comments/{comment_id}', 'Api\CommentController@destroy');


    // Attachment
    // Route::post('/attachments/model/{model}/model_id/{model_id}/storage/{storage}', 'Api\AttachmentController@upload');
    Route::post('/attachments/{model_id}', 'Api\AttachmentController@upload');
    Route::get('/attachments/{attachment_id}/storage/{storage}/download', 'Api\AttachmentController@download');
    Route::delete('/attachments/{attachment_id}/storage/{storage}', 'Api\AttachmentController@destroy');

    // Employees
    Route::get('/employees/{model}/{model_id}', 'Api\PeopleController@getEmployees');
    Route::post('/employees/{model}/{model_id}', 'Api\PeopleController@saveEmployee');
    Route::put('/employees/{employee_id}', 'Api\PeopleController@updateEmployee');

    // Addresses
    Route::get('/addresses/{model}/{model_id}', 'Api\AddressController@getAddresses');
    Route::post('/addresses/{model}/{model_id}', 'Api\AddressController@saveAddress');
    Route::put('/addresses/{address_id}', 'Api\AddressController@updateAddress');
    /* ------------------------------------------------------------------------------------ */

    // Work
    Route::get('/works', 'Api\WorkController@index');
    Route::post('/works', 'Api\WorkController@store');
    Route::get('/works/{work_id}', 'Api\WorkController@show');
    Route::put('/works/{work_id}', 'Api\WorkController@update');

    Route::get('/works/{work_id}/company/{company_id}/sub-project/{sub_project_id}/search-quotations', 'Api\WorkController@searchQuotations');
    Route::put('/works/{work_id}/connect-quotations', 'Api\WorkController@connectQuotations');
    Route::put('/works/{work_id}/disconnect-quotations', 'Api\WorkController@disconnectQuotations');
    Route::get('/works/{work_id}/related-quotations', 'Api\WorkController@getRelatedQuotations');

    Route::get('/works/{work_id}/work-status-histories', 'Api\WorkController@getWorkStatusHistories');
    Route::post('/works/{work_id}/work-status-histories', 'Api\WorkController@changeWorkStatus');

    Route::get('/works/{work_id}/search-transactions', 'Api\WorkController@searchTransaction');
    Route::put('/works/{work_id}/connect-transactions', 'Api\WorkController@connectTransaction');
    Route::put('/works/{work_id}/disconnect-transactions', 'Api\WorkController@disconnectTransaction');
    Route::get('/works/{work_id}/related-transactions', 'Api\WorkController@getRelatedTransaction');

    // Sale Order
    Route::get('/sale-orders', 'Api\SaleOrderController@index');
    Route::post('/sale-orders', 'Api\SaleOrderController@store');
    Route::get('/sale-orders/{sale_order_id}', 'Api\SaleOrderController@show');
    Route::put('/sale-orders/{sale_order_id}', 'Api\SaleOrderController@update');
    Route::post('/sale-orders/{sale_order_id}/items', 'Api\SaleOrderLineController@store');
    Route::post('/sale-orders/{sale_order_id}/option', 'Api\SaleOrderOptionController@store');
    Route::put('/sale-orders/{sale_order}/option/{option_id}', 'Api\SaleOrderOptionController@update');

    // Wcc
    Route::get('/wccs', 'Api\WccController@index');
    Route::post('/wccs', 'Api\WccController@store');
    Route::get('/wccs/{wcc_id}', 'Api\WccController@show');
    Route::put('/wccs/{wcc_id}', 'Api\WccController@update');

    //Invoice
    Route::get('/invoices', 'Api\InvoiceController@index');
    Route::post('/invoices', 'Api\InvoiceController@store');
    Route::get('/invoices/company/{company}', 'Api\InvoiceController@init');
    Route::get('/invoices/{invoice_id}', 'Api\InvoiceController@show');
    Route::put('/invoices/{invoice_id}', 'Api\InvoiceController@update');
    Route::get('/invoices/work/{work_id}/sale-order-lines', 'Api\InvoiceController@getSaleOrderLines');

    Route::post('/invoices/{invoice_id}/items', 'Api\InvoiceLineController@store');

    Route::post('/invoices/{invoice_id}/option', 'Api\InvoiceOptionController@store');
    Route::put('/invoices/{invoice_id}/option/{option_id}', 'Api\InvoiceOptionController@update');

    Route::get('/invoices/{invoice_id}/init-ies-reminder', 'Api\InvoiceController@initIesReminder');
    Route::get('/invoices/{invoice_id}/init-client-reminder', 'Api\InvoiceController@initClientReminder');
    Route::post('/invoices/{invoice_id}/update-ies-reminder', 'Api\InvoiceController@updateIesReminder');
    Route::post('/invoices/{invoice_id}/update-client-reminder', 'Api\InvoiceController@updateClientReminder');

    Route::get('/invoices/{invoices_id}/pdf-documents', 'Api\InvoicePdfDocumentController@index');
    Route::post('/invoices/{invoices_id}/pdf-documents', 'Api\InvoicePdfDocumentController@store');
    Route::put('/invoices/{invoices_id}/pdf-documents', 'Api\InvoicePdfDocumentController@update');
    Route::put('/invoices/{invoices_id}/pdf-documents/{document_id}/change-status', 'Api\InvoicePdfDocumentController@changeStatus');
    Route::get('/invoices/{invoices_id}/pdf-documents/{document_id}/download', 'Api\InvoicePdfDocumentController@download');

    // Payment
    Route::get('/payments', 'Api\PaymentController@index');
    Route::post('/payments', 'Api\PaymentController@store');
    Route::get('/payments/{payment_id}', 'Api\PaymentController@show');
    Route::get('/payments/work/{work_id}', 'Api\PaymentController@init');
    Route::put('/payments/{payment_id}', 'Api\PaymentController@update');

    // Quotation
    Route::get('/quotations', 'Api\QuotationController@index')->middleware(['can:access-quotation']);
    Route::get('/quotations/{quotation_id}', 'Api\QuotationController@show')->middleware(['can:access-quotation']);
    Route::post('/quotations', 'Api\QuotationController@store')->middleware(['can:edit-quotation']);
    Route::put('/quotations/{quotation_id}', 'Api\QuotationController@update')->middleware(['can:edit-quotation']);

    Route::post('/quotations/{quotation_id}/items', 'Api\QuotationLineController@store')->middleware(['can:edit-quotation']);

    Route::post('/quotations/{quotation_id}/option', 'Api\QuotationOptionController@store')->middleware(['can:edit-quotation']);
    Route::put('/quotations/{quotation_id}/option/{option_id}', 'Api\QuotationOptionController@update')->middleware(['can:edit-quotation']);

    Route::get('/quotations/{quotation_id}/pdf-documents', 'Api\QuotationPdfDocumentController@index');
    Route::post('/quotations/{quotation_id}/pdf-documents', 'Api\QuotationPdfDocumentController@store')->middleware(['can:edit-quotation']);
    Route::put('/quotations/{quotation_id}/pdf-documents', 'Api\QuotationPdfDocumentController@update')->middleware(['can:edit-quotation']);
    Route::put('/quotations/{quotation_id}/pdf-documents/{pdf_id}/change-status', 'Api\QuotationPdfDocumentController@changeStatus');
    Route::get('/quotations/{quotation_id}/pdf-documents/{pdf_id}/download', 'Api\QuotationPdfDocumentController@download')->middleware(['can:access-quotation']);

    // Purchase Order
    Route::get('/purchase-orders', 'Api\PurchaseOrderController@index');
    Route::get('/purchase-orders/{purchase_order_id}', 'Api\PurchaseOrderController@show');
    Route::post('/purchase-orders', 'Api\PurchaseOrderController@store');
    Route::put('/purchase-orders/{purchase_order_id}', 'Api\PurchaseOrderController@update');

    Route::post('/purchase-orders/{purchase_order_id}/items', 'Api\PurchaseOrderLineController@store');

    Route::post('/purchase-orders/{purchase_order_id}/option', 'Api\PurchaseOrderOptionController@store');
    Route::put('/purchase-orders/{purchase_order_id}/option/{option_id}', 'Api\PurchaseOrderOptionController@update');

    Route::get('/purchase-orders/{purchase_order_id}/pdf-documents', 'Api\PurchaseOrderPdfDocumentController@index');
    Route::post('/purchase-orders/{purchase_order_id}/pdf-documents', 'Api\PurchaseOrderPdfDocumentController@store');
    Route::put('/purchase-orders/{purchase_order_id}/pdf-documents', 'Api\PurchaseOrderPdfDocumentController@update');
    Route::put('/purchase-orders/{purchase_order_id}/pdf-documents/{pdf_id}/change-status', 'Api\PurchaseOrderPdfDocumentController@changeStatus');
    Route::get('/purchase-orders/{purchase_order_id}/pdf-documents/{pdf_id}/download', 'Api\PurchaseOrderPdfDocumentController@download');

    // Company
    Route::get('/companies', 'Api\CompanyController@index');
    Route::post('/companies', 'Api\CompanyController@store');
    Route::put('/companies/{company_id}', 'Api\CompanyController@update');

    // Project
    Route::get('/projects', 'Api\ProjectController@index');
    Route::post('/projects', 'Api\ProjectController@store');
    Route::put('/projects/{project_id}', 'Api\ProjectController@update');

    // Sub Project
    Route::get('/projects/{project_id}/sub-projects', 'Api\SubProjectController@index');
    Route::post('/projects/{project_id}/sub-projects', 'Api\SubProjectController@store');
    Route::put('/projects/{project_id}/sub-projects/{sub_project_id}', 'Api\SubProjectController@update');

    // Delivery Status
    Route::get('/delivery-notes', 'Api\DeliveryNoteController@index');
    Route::put('/delivery-notes/{delivery_note_id}/change-status', 'Api\DeliveryNoteController@changeStatus');
    Route::get('/delivery-notes/{delivery_note_id}/histories', 'Api\DeliveryNoteController@getDeliveryHistories');

    // Account Transaction History
    Route::get('/account-transactions', 'Api\AccountTransactionController@index');
    Route::post('/account-transactions', 'Api\AccountTransactionController@store');
    Route::put('/account-transactions/{account_transaction_id}', 'Api\AccountTransactionController@update');

    // Supplier
    Route::get('/suppliers', 'Api\SupplierController@index');
    Route::post('/suppliers', 'Api\SupplierController@store');
    Route::put('/suppliers/{supplier_id}', 'Api\SupplierController@update');

    Route::get('/suppliers/{supplier_id}/employees', 'Api\SupplierEmployeeController@index');
    Route::post('/suppliers/{supplier_id}/employees', 'Api\SupplierEmployeeController@store');
    Route::put('/suppliers/{supplier_id}/employees/{employee_id}', 'Api\SupplierEmployeeController@update');

    Route::get('/suppliers/{supplier_id}/banks', 'Api\SupplierBankAccountController@index');
    Route::post('/suppliers/{supplier_id}/banks', 'Api\SupplierBankAccountController@store');
    Route::put('/suppliers/{supplier_id}/banks/{bank_id}', 'Api\SupplierBankAccountController@update');

    Route::get('/set-default-permission', 'Api\HomeController@setDefaultPermission');

    Route::post('/daily-reports', 'Api\ReportController@generateDailyReport');
    Route::post('/weekly-reports', 'Api\ReportController@generateWeeklyReport');
    Route::post('/monthly-reports', 'Api\ReportController@generateMonthlyReport');

    Route::get('convert-excel/works', 'Api\ExcelController@convertWork');
    Route::get('convert-excel/download', 'Api\ExcelController@download');

    Route::get('/assets/ppes', 'Api\Asset\PpeController@index');
    Route::post('/assets/ppes', 'Api\Asset\PpeController@store');

    Route::get('/assets/ppe-categories', 'Api\Asset\PpeCategoryController@getCategory');
    Route::get('/assets/ppe-categories/category/{category_id}', 'Api\Asset\PpeCategoryController@getSubCategory');
    Route::get('/assets/ppe-categories/sub-category/{sub_category_id}', 'Api\Asset\PpeCategoryController@getSize');

    Route::post('/assets/ppe-categories/category', 'Api\Asset\PpeCategoryController@addCategory');
    Route::post('/assets/ppe-categories/category/{category_id}/sub-category', 'Api\Asset\PpeCategoryController@addSubCategory');
    Route::post('/assets/ppe-categories/sub-category/{sub_category_id}/size', 'Api\Asset\PpeCategoryController@addSize');

    Route::put('/assets/ppe-categories/category/{category_id}', 'Api\Asset\PpeCategoryController@updateCategory');
    Route::put('/assets/ppe-categories/sub-category/{sub_category_id}', 'Api\Asset\PpeCategoryController@updateSubCategory');
    Route::put('/assets/ppe-categories/size/{size_id}', 'Api\Asset\PpeCategoryController@updateSize');
});
