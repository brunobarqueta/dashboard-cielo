function DashboardStats({title, icon, value, colorIndex}){

    const COLORS = ["primary", "primary"]

    return(
        <div className="stats shadow" data-testid="dashboard-stat">
            <div className="stat">
                <div className={`stat-figure dark:text-slate-300 text-${COLORS[colorIndex%2]}`} data-testid="dashboard-stat-icon">{icon}</div>
                <div className="stat-title dark:text-slate-300" data-testid="dashboard-stat-title">{title}</div>
                <div className={`stat-value dark:text-slate-300 text-${COLORS[colorIndex%2]}`} data-testid="dashboard-stat-value">{value}</div>
                
            </div>
        </div>
    )
}

export default DashboardStats