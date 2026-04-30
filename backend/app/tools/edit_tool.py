def edit_interaction(existing_data, update_request):
    return {
        "previous_data": existing_data,
        "updated_request": update_request,
        "status": "Interaction updated successfully"
    }