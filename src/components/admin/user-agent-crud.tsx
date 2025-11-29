"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UserAgentCRUD = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">User management features coming soon.</p>
                </CardContent>
            </Card>
        </div>
    );
};
