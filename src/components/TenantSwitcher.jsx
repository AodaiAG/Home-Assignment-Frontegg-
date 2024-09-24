import React from 'react';
import { useAuth } from '@frontegg/react';  // Use useAuth hook to access tenant data

const TenantSwitcher = () => {
    const { user, setActiveTenant, activeTenant } = useAuth();  // Access user and tenant-related info

    const handleTenantChange = (event) => {
        const selectedTenantId = event.target.value;
        setActiveTenant(selectedTenantId);  // Switch to the selected tenant
    };

    return (
        <div>
            <h3>Switch Tenant</h3>
            <select value={activeTenant?.id} onChange={handleTenantChange}>
                {user?.tenants?.map((tenant) => (
                    <option key={tenant.id} value={tenant.id}>
                        {tenant.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TenantSwitcher;
