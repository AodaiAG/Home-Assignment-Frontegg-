import React from 'react';
import { useAuth, useAuthActions } from '@frontegg/react';  // Add useAuthActions for tenant switching

const TenantSwitcher = () => {
    const { user } = useAuth();  // Access user information
    const { switchTenant } = useAuthActions();  // Add switchTenant function

    const handleTenantChange = (event) => {
        const selectedTenantId = event.target.value;
        switchTenant({ tenantId: selectedTenantId });  // Switch to the selected tenant
    };

    return (
        <div>
            <h3>Switch Tenant</h3>
            <select onChange={handleTenantChange}>
                {user?.tenantIds?.map((tenantId) => (
                    <option key={tenantId} value={tenantId}>
                        {tenantId}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TenantSwitcher;
